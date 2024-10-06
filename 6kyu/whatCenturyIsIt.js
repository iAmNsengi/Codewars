function whatCentury(year) {
  let century = Math.ceil(+year / 100) + "";

  const last =
    +century.slice(-1) == "1"
      ? "st"
      : +century.slice(-1) == "2"
      ? "nd"
      : +century.slice(-1) == "3"
      ? "rd"
      : "th";

  return century.slice(-2, 1) == "1" ? century + "th" : century + last;
}
