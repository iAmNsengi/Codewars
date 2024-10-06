function reverseSlice(str) {
  return [...str].reverse().map((el, i, arr) => {
    return arr.slice(i).join("");
  });
}
