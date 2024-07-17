function between(a, b) {
  return [...new Array(b - a + 1)].map((el, i) => a + i);
}
