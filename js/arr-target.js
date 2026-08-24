function getTargetArr(arr, target) {
  const result = [];
  const seen = {};
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        const pair = [arr[i], arr[j]];
        const key = pair.sort().join(',');
        if (seen[key]) {
          duplicates.push(pair);
        } else {
          seen[key] = true;
          result.push(pair);
        }
      }
    }
  }
  return {result, duplicates};
}

console.log({getTarget: getTargetArr([2, 5, 3, 6, 3, 7, 8, 2], 8).result});
console.log({duplicates: getTargetArr([2, 5, 3, 6, 3, 7, 8, 2], 8).duplicates});

// function twoSum(arr, target) {
//   let map = {};
//   for (let i = 0; i < arr.length; i++) {
//     let comp = target - arr[i];
//     if (map[comp] != undefined) {
//       return [map[comp], i];
//     }
//     map[arr[i]] = i;
//   }
//   return [];
// }

// console.log({getSub: twoSum([1, 2, 3, 5, 6, 7], 5)});
