export function arr2bin(arr: any[]): string {
  return arr
    .filter((el) => typeof el === "number")
    .reduce((a, b) => a + b, 0)
    .toString(2);
}
