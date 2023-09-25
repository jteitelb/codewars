const capitals = (word) =>
  word.split("").reduce((acc, c, index) => {
    if (c === c.toUpperCase()) {
      acc.push(index);
    }
    return acc;
  }, []);

console.log(capitals("CodeWars"));

const capitalsLoopRegex = (word) => {
  result = [];
  for (let i = 0; i < word.length; i++) {
    if (/[A-Z]/.test(word[i])) {
      result.push(i);
    }
  }
  return result;
};

console.log(capitalsLoopRegex("CodeWars"));
