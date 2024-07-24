export function* fibonacciSequence(): Iterator<bigint> {
  const fib = [1n, 1n];
  const addToFib = () => {
    fib.push(fib[fib.length - 2] + fib[fib.length - 1]);
    return fib.length == 3
      ? [1n, 1n, fib[fib.length - 1]]
      : [fib[fib.length - 1]];
  };
  while (true) yield* addToFib();
}
