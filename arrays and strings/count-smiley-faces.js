function countSmileys(arr) {
  const isSmiley = (str) => /^[:;][-~]?[\)D]$/.test(str);
  return arr.filter(isSmiley).length;
}
