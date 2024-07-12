export function smaller(nums: number[]): number[] {
  return nums.map((el, i, arr) => {
    return arr.slice(i + 1).filter((item) => item < el).length;
  });
}
