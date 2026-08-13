function customMap(arr, callback) {
  let result = [];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    result[index] = callback(arr[i], i, arr);
    index++;
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const output = customMap(numbers, function (num) {
  return num * 2;
});

console.log({output});
