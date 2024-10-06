function alphabetized(s) {
  return s
    .replaceAll(/[^a-zA-Z]/g, "")
    .split("")
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .join("");
}
console.log(alphabetized("i am not      okay"));
