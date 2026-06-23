function argeDataType(...args) {
  console.log({dataType: typeof args});
  console.log(args);
}

argeDataType(1, 2, 3, 4, 5);
argeDataType('a', 'b', 'c', 'd', 'e');
