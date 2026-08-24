Array.prototype.sum = function () {
  return this.reduce((acc, val) => acc + val, 0);
};

Array.prototype.unique = function () {
  return [...new Set(this)];
};

// Using inside a Map
const myMap = new Map();
myMap.set('number', [1, 2, 2, 3, 4]);
console.log(myMap.get('number').sum());
console.log(myMap.get('number').unique());
