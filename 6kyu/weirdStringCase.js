function hamming(a, b) {
  // Implement me!
  return a.split("").filter((el, i) => el !== b.split("")[i]).length;
}
