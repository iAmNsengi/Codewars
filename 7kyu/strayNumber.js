function stray(numbers) {
  const arr = numbers.filter((el) => el != numbers[0]);
  return arr.length > 1 ? numbers[0] : Number(arr.join(""));
}
