function createPhoneNumber(numbers) {
  const s = numbers.join("");
  areaCode = s.slice(0, 3);
  middle = s.slice(3, 6);
  end = s.slice(6, 10);
  return `(${areaCode}) ${middle}-${end}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
