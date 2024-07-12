function sumNoDuplicates(numList) {
  return numList
    .map((el, i, arr) => {
      return arr.filter((item) => item == el).length > 1 ? 0 : el;
    })
    .reduce((a, b) => a + b, 0);
}
