String.prototype.toAlternatingCase = function () {
  return [...this]
    .map((char) =>
      char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
};
