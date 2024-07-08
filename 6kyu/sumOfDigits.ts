export const digitalRoot = (n: number): number => {
  // your code here
  let sumOfDigits = (num: number): number => {
    return +num
      .toString()
      .split("")
      .reduce((a: number, b: string) => Number(a) + Number(b), 0);
  };
  while (n.toString().length > 1) {
    n = sumOfDigits(n);
  }
  return n;
};
