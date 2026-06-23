// function getFibonacci(n) {
//   let num1 = 0;
//   let num2 = 1;
//   const finalOutput = [];
//   for (let i = 0; i < n; i++) {
//     finalOutput.push(num1);
//     const result = num1 + num2;
//     num1 = num2;
//     num2 = result;
//   }
//   console.log(finalOutput);
// }
// getFibonacci(10);

// function getFibonacciCount(n) {
//   if (n <= 1) return n;
//   return getFibonacciCount(n - 1) + getFibonacciCount(n - 2);
// }
// console.log({number: getFibonacciCount(10)});
