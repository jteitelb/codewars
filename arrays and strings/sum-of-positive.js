function positiveSum(arr) {
  return arr.reduce((acc, n) => (n > 0 ? acc + n : acc), 0);
}
