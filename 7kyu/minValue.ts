export const minValue = (values: number[]): number => {
  return +[...new Set(values.map((el) => +el).join(""))]
    .map((el) => Number(el))
    .sort((a, b) => a - b)
    .join("");
};
