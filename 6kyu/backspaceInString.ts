export function cleanString(s: string): string {
  // ... your code ...
  let returnStr: string[] = [];
  s.split("").forEach((el: string) => {
    el !== "#" ? returnStr.push(el) : returnStr.pop();
  });
  return returnStr.join("");
}
