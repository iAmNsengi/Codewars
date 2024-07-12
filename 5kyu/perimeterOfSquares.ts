export const perimeter = (n: number): number => {
  const fibonacci = [1, 1];
  for (let i = 2; i <= n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }
  return fibonacci.reduce((a, b) => a + b, 0) * 4;
};
