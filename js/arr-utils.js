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

// get unique array
function getUniqueArray(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;

    for (let j = 0; j < uniqueArr.length; j++) {
      if (uniqueArr[j] == arr[i]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

function getUniqueArray1(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) uniqueArr.push(arr[i]);
  }
  return uniqueArr;
}

console.log({uniqueArr: getUniqueArray1([1, 2, 2, 3, 4, 4, 5, 3])});
