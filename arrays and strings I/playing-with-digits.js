function digPow(n, p) {
  const sum = String(n)
    .split("")
    .map((s) => parseInt(s))
    .map((n, i) => Math.pow(n, p + i))
    .reduce((acc, n) => acc + n);
  return sum % n === 0 ? sum / n : -1;
}
