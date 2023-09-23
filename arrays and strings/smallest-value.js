/* all assume:
- arr.length > 0
- toReturn is 'value' or 'index'
*/

function min(arr, toReturn) {
  const minTuple = arr.reduce(
    (minTuple, n, index) => {
      [minIndex, minVal] = minTuple;
      if (n < minVal) {
        minTuple[0] = index;
        minTuple[1] = n;
      }
      return minTuple;
    },
    [0, arr[0]]
  );
  return toReturn == "index" ? minTuple[0] : minTuple[1];
}

function minReadable(arr, toReturn) {
  minVal = arr[0];
  minIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
      minIndex = i;
    }
  }
  return toReturn == "index" ? minIndex : minVal;
}

function minSimple(arr, toReturn) {
  const minVal = Math.min(...arr);
  if (toReturn === "value") {
    return minVal;
  }
  return arr.indexOf(minVal);
}
