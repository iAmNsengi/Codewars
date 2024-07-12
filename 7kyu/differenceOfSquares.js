function differenceOfSquares(n) {
  let squares1 = 0,
    squares2 = 0;
  while (n >= 1) {
    squares1 += n;
    squares2 += n ** 2;
    n--;
  }
  return squares1 ** 2 - squares2;
}
