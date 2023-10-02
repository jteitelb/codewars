function twoSum(numbers, target) {
  let targets = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (targets.has(numbers[i])) {
      let prev = targets.get(numbers[i]);
      return [prev, i];
    } else {
      targets.set(target - numbers[i], i);
    }
  }
  return [-1, -1];
}
