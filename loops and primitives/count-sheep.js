var countSheep = function (num) {
  return Array(num)
    .fill(1)
    .map((n, i) => `${n + i} sheep...`)
    .join("");
};

console.log(countSheep(3));
