export function twoOldestAges(ages: number[]): number[] {
  let oldest: number = Math.max(...ages);
  ages.splice(ages.indexOf(oldest), 1);
  let secondOldest: number = Math.max(...ages);
  return [secondOldest, oldest];
}
