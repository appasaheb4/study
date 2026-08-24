function memoizeWithTTL(fn, ttl = 2000) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    const now = Date.now();
    // console.log({now});
    if (cache.has(key)) {
      const {value, expiry} = cache.get(key);
      if (now < expiry) {
        console.log('from cache ...');
        return value;
      }
      cache.delete(key);
    }
    const result = fn(...args);
    // console.log({updatedNow: now + ttl});
    cache.set(key, {value: result, expiry: now + ttl});
    return result;
  };
}

function showAdd(a, b) {
  console.log('Computing...');
  return a + b;
}

const memoizedAdd = memoizeWithTTL(showAdd, 2000);
console.log(memoizedAdd(2, 5));
console.log(memoizedAdd(2, 5));
