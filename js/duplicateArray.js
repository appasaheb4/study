const arr1 = [1, 4, 6, 3, 4, 5, 7, 7, 1];

// const result = arr1.reduce((acc, curr) => {
//   if (!acc.includes(curr)) acc.push(curr);
//   return acc;
// }, []);

// console.log(result);

// const result = [...new Set(arr1)];
// console.log(result);

const result = arr1.filter((item, index) => {
  return arr1.indexOf(item) == index;
});

console.log({result});
