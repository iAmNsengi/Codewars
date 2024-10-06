const firstNonRepeatingLetter = (s) =>
  s
    .split("")
    .find(
      (el) =>
        s.toLowerCase().lastIndexOf(el.toLowerCase()) ===
        s.toLowerCase().indexOf(el.toLowerCase())
    ) || "";
