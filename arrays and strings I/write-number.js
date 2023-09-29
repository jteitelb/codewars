function expandedForm(num) {
  let exponent = 0;
  const result = [];
  while (num > 0) {
    digit = num % 10;
    if (digit !== 0) {
      result.push(digit * Math.pow(10, exponent));
    }
    num = Math.floor(num / 10);
    exponent++;
  }
  result.reverse();
  return result.join(" + ");
}

function expanded(num) {
  return num
    .toString()
    .split("")
    .reverse()
    .map((char, index) => char + "0".repeat(index))
    .filter((s) => s[0] !== "0")
    .reverse()
    .join(" + ");
}

console.log(expanded(234));
