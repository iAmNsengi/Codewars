function countDigit(number, digit, base, fromBase) {
  return Number(parseInt(number, fromBase))
    .toString(base)
    .split("")
    .filter((el) => el == digit).length;
}
