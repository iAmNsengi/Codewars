function sentence(arrayOfObjects) {
  // your code
  return arrayOfObjects
    .map((el) => Object.entries(el).flat())
    .sort((a, b) => +a[0] - +b[0])
    .map((el) => el[1])
    .join(" ");
}
