function bubbleSortDesc(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap using destructuring
      }
    }
  }
  return arr;
}
const arr1 = [3, 1, 5, 2, 8, 4];
console.log(bubbleSortDesc(arr1)); // [8, 5, 4, 3, 2, 1]
