function filterHomogenous(arrays) {
  function isHomogenous(arr) {
    const differentType = arr.filter((val) => typeof val !== typeof arr[0]);
    return differentType.length === 0;
  }
  const result = [];
  arrays.forEach((array) => {
    if (array.length > 0 && isHomogenous(array)) {
      result.push(array);
    }
  });
  return result;
}

function filterHomogenousClean(arrays) {
  function isHomogenous(arr) {
    return arr.length > 0 && arr.every((val) => typeof val === typeof arr[0]);
  }
  return arrays.filter(isHomogenous);
}

console.log(
  filterHomogenousClean([
    [1, 2, 3],
    [NaN, 27, -Infinity],
    ["a", "b", "c"],
    [],
    [1, 2, "b"],
    [false, true, "true"],
    [true, true, false],
    [filterHomogenous, () => {}, Array.prototype.forEach],
    [Object(), null, []],
  ])
);
