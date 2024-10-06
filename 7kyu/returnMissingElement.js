function getMissingElement(arr) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((a) => !arr.includes(a))[0];
}
