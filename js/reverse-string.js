function reOrder(str) {
  const arrStr = str.split(' ');
  const finalOutput = [];

  function isLetter(char) {
    const lower = char.toLowerCase();
    return lower >= 'a' && lower <= 'z';
  }

  for (let i = 0; i < arrStr.length; i++) {
    let reverseStr = '';
    let symbols = '';
    for (let j = 0; j < arrStr[i].length; j++) {
      const char = arrStr[i][j];
      if (isLetter(char)) {
        reverseStr = char + reverseStr;
      } else {
        symbols = symbols + char;
      }
    }
    finalOutput.push(reverseStr + symbols);
  }
  return finalOutput.join(' ');
}

console.log({output: reOrder('My, name is appa')});
