function findMissingLetter(array) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  array = array.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  let str = [
    ...alphabet.slice(
      alphabet.indexOf(array[0].toLowerCase()),
      alphabet.indexOf(array[array.length - 1].toLowerCase()) + 1
    ),
  ].filter((el) => !array.map((el) => el.toLowerCase()).includes(el))[0];
  return array[0].toUpperCase() === array[0] ? str.toUpperCase() : str;
}
//
console.log(findMissingLetter(["O", "Q", "R", "S"]));
