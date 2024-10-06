function incrementString(strng) {
  let flag = true;
  if (isNaN(+strng.slice(-1))) return strng + 1;
  const numbers = [...strng]
    .reverse()
    .map((el, i) => {
      if (!isNaN(el) && flag) return el;
      else flag = false;
    })
    .filter((el) => el)
    .reverse();
  const text = strng.slice(0, numbers.length * -1);
  return numbers.length == 0
    ? +text + 1 + ""
    : text + (+numbers.join("") + 1 + "").padStart(numbers.length, 0);
}
