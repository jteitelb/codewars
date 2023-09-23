function arrayDiff(a, b) {
  return a.filter((v) => !b.includes(v));
}

function arrayDiffLoop(a, b) {
  const result = [];
  for (val of a) {
    if (!b.includes(val)) {
      result.push(val);
    }
  }
  return result;
}
