function countPositivesSumNegatives(input) {
  if (!input) return [];
  let x = input.filter((el) => el > 0).length;
  let y = input.filter((el) => el <= 0).reduce((a, b) => a + b, 0);
  let output = [];
  if (x) output.push(x);
  if (y) output.push(y);
  return output;
}
