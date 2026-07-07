const arr = [1, 2, 3, 4, 6, 8, 7, 5];
const target = 8;
const pairs = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      pairs.push([arr[i], arr[j]]);
    }
  }
}

console.log(pairs);
