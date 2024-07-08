export function spinWords(words: string): string {
  return words
    .split(" ")
    .map((el: string) => {
      return el.length >= 5 ? el.split("").reverse().join("") : el;
    })
    .join(" ");
}
