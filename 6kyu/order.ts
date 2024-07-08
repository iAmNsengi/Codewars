export function order(words: string): string {
  let wordsNum: string[] = words
    .split(" ")
    .map((el: string) => el.split("").filter((val: string) => !isNaN(+val)))
    .flat();
  let returnArr: string[] = [];
  wordsNum.forEach((el: string, i: number) => {
    returnArr[Number(el) - 1] = words.split(" ")[i];
  });
  return returnArr.join(" ");
}
