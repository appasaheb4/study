function getCombination(arr) {
  const result = [];

  function helper(start, combo) {
    if (combo.length > 0) {
      result.push([...combo]);
    }

    for (let i = start; i < arr.length; i++) {
      combo.push(arr[i]);
      helper(i + 1, combo);
      combo.pop();
    }
  }
  helper(0, []);
  return result;
}

const basket = ['banana', 'apple', 'mango'];
console.log(getCombination(basket));
