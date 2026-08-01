const arr = [1, 2, 3, 1, 3, 4, 5];
const duplicateResult = arr.filter(
  (item, index) => arr.indexOf(item) !== index,
);
console.log({duplicateResult});

const uniqueResult = arr.filter((item, index) => arr.indexOf(item) === index);
console.log({uniqueResult});

const nonDuplicateResult = arr.filter(
  (item, index) => arr.indexOf(item) === arr.lastIndexOf(item),
);
console.log({nonDuplicateResult});
