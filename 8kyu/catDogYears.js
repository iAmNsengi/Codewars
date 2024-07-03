var humanYearsCatYearsDogYears = function (humanYears) {
  if (humanYears === 1) return [humanYears, 15, 15];
  if (humanYears === 2) return [humanYears, 24, 24];

  return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
};
