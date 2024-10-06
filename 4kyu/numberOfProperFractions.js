function properFractions(n) {
  if (n === 1) return 0;

  let result = n,
    p = 2;

  while (p * p <= n) {
    if (n % p === 0) {
      while (n % p === 0) {
        n /= p;
      }
      result *= 1 - 1 / p;
    }
    p++;
  }

  if (n > 1) result *= 1 - 1 / n;

  return Math.round(result);
}
