function lastDigit(a, b) {
  if (b === 0n) return 1n;

  a = a % 10n;

  if (a === 0n) return 0n;
  if (a === 1n) return 1n;

  b = b % 4n;
  if (b === 0n) b = 4n;

  return BigInt(Math.pow(Number(a), Number(b)) % 10);
}
