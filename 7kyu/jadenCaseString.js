String.prototype.toJadenCase = function (str) {
  return (
    this.split(" ")
      .map((el) => el[0].toUpperCase() + el.slice(1, el.length))
      .join(" ") || " "
  );
};
