function sumDigits(number) {
  return ("" + Math.abs(number))
    .split("")
    .reduce((a, b) => Number(a) + Number(b), 0);
}
