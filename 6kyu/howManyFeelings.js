function countFeelings(string, array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    [...array[i]].filter((el) => string.includes(el)).length == array[i].length
      ? (count += 1)
      : null;
  }
  return count == 1 ? count + " feeling." : count + " feelings.";
}
