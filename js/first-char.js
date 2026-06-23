// function firstChar(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//       return str[i];
//     }
//   }
//   return null;
// }

function firstChar(str) {
  const counts = {};
  [...str].forEach((char) => {
    counts[char] = (counts[char] || 0) + 1;
  });
  //   console.log({counts});
  for (let char of str) {
    if (counts[char] == 1) {
      return char;
    }
  }
}

console.log({value: firstChar('aabbcdde')});
