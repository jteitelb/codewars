function isPerfect(n) {
  if (n < 2) {
    return false;
  }
  const MAX = Math.sqrt(n);

  let sum = 1;
  for (let i = 2; i <= MAX; i++) {
    if (n % i === 0) {
      sum += i + n / i;
    }
    if (sum > n) {
      return false;
    }
  }
  return sum == n;
}

const isPerfect2 = (n) =>
  n >= 6 &&
  Array(Math.floor(Math.sqrt(n) - 1))
    .fill(2)
    .map((x, i) => x + i)
    .filter((x) => n % x === 0)
    .reduce((acc, x) => acc + x + n / x, 1) == n;

console.log(isPerfect2(1));
console.log(isPerfect2(2428));
console.log(isPerfect2(23459879034));

console.log(isPerfect2(6));
console.log(isPerfect2(8128));
console.log(isPerfect2(137438691328));
