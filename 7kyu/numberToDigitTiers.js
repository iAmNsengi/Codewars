function createArrayOfTiers(num) {
  return [...(num + "")].map((el, i, arr) => arr.slice(0, i + 1).join(""));
}
