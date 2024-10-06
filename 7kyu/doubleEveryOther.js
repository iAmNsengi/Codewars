function doubleEveryOther(a) {
  return a.map((el, i) => (i % 2 != 0 ? el * 2 : el));
}
