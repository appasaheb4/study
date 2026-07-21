class MyPromise {
  static all(promises) {
    return new Promise((resolve, reject) => {
      let result = [];
      let completed = 0;
      promises.forEach((item, index) => {
        Promise.resolve(item)
          .then((res) => {
            result[index] = res;
            completed++;
            if (completed == promises.length) {
              resolve(result);
            }
          })
          .catch((err) => reject(err));
      });
    });
  }
}

function funA() {
  return Promise.resolve('Hi');
}

function funAA() {
  Promise.reject('facing issue');
}

function funB() {
  return Promise.resolve('Hello');
}

MyPromise.all([funA(), funAA(), funB()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log({err}));
