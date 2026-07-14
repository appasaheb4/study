const longString = 'I am javascript developer';

function longestWord(str) {
  let word = '';
  let longest = '';
  for (let i = 0; i <= str.length; i++) {
    if ((str[i] === ' ') | (1 === str.length)) {
      if (word.length > longest.length) {
        longest = word;
      }
      word = '';
    } else {
      word += str[i];
    }
  }
  return longest;
}

console.log({output: longestWord(longString)});
