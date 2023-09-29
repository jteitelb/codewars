function insert_dash(num) {
  const result = [];
  const numStr = num.toString();
  for (let i = 0; i < numStr.length - 1; i++) {
    result.push(numStr[i]);
    if (numStr[i] % 2 === 1 && numStr[i + 1] % 2 === 1) {
      result.push("-");
    }
  }
  result.push(numStr[numStr.length - 1]);
  return result.join("");
}

console.log(insert_dash(266578));
