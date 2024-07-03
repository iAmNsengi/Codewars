function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split(/[^a-z]+/)
    .map((el) =>
      [...el].map((item) => "abcdefghijklmnopqrstuvwxyz".indexOf(item) + 1)
    )
    .flat()
    .join(" ");
}
