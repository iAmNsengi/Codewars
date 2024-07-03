function getMiddle(s) {
  return s.length % 2 != 0
    ? s[Math.floor(s.length / 2)]
    : s[Math.ceil(s.length / 2) - 1] + s[Math.floor(s.length / 2)];
}
