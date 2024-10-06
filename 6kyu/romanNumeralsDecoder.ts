export function solution(roman: string): number {
  const romanNumerals: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return [...roman].reduce((total, current, index, array) => {
    const currentValue = romanNumerals[current];
    const nextValue = romanNumerals[array[index + 1]];

    return nextValue && currentValue < nextValue
      ? total - currentValue
      : total + currentValue;
  }, 0);
}
