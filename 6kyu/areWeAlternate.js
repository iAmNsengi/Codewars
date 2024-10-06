function isAlt(word) {
  if (word.length === 1) return true;
  const vowelMap = word.split("").map((char) => "aeiou".includes(char));
  return vowelMap.reduce((acc, current, index) => {
    if (index === 0) return acc;
    return acc && vowelMap[index - 1] !== current;
  }, true);
}
