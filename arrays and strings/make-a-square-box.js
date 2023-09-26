function box(n) {
  const bounds = "-".repeat(n);
  const inner = "-" + " ".repeat(n - 2) + "-";
  const innerArr = Array(n - 2).fill(inner);
  return [bounds].concat(innerArr).concat(bounds);
}
