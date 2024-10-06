function reverseVowels(str) {
  const vowels = [...str]
    .filter((el) => "aeiou".includes(el.toLowerCase()))
    .reverse();
  return [...str]
    .map((el) => {
      if ("aeiou".includes(el.toLowerCase())) return vowels.shift();
      return el;
    })
    .join("");
}
