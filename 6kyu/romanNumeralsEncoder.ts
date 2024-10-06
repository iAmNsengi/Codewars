export const solution = (num: number): string => {
  if (num < 1 || num > 3999) {
    return "";
  }

  const romanNumerals: { value: number; toRoman: string }[] = [
    { value: 1000, toRoman: "M" },
    { value: 900, toRoman: "CM" },
    { value: 500, toRoman: "D" },
    { value: 400, toRoman: "CD" },
    { value: 100, toRoman: "C" },
    { value: 90, toRoman: "XC" },
    { value: 50, toRoman: "L" },
    { value: 40, toRoman: "XL" },
    { value: 10, toRoman: "X" },
    { value: 9, toRoman: "IX" },
    { value: 5, toRoman: "V" },
    { value: 4, toRoman: "IV" },
    { value: 1, toRoman: "I" },
  ];

  return romanNumerals
    .map(({ value, toRoman }) => {
      const count = Math.floor(num / value);
      num %= value;
      return toRoman.repeat(count);
    })
    .join("");
};
