function maskify(cc) {
  return cc
    .split("")
    .map((digit, index) => (index >= cc.length - 4 ? digit : "#"))
    .join("");
}

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("6"));
console.log(maskify(""));
