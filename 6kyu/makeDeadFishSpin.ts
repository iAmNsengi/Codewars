/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
  let outputArr: number[] = [],
    num: number = 0;
  data.split("").forEach((el: string) => {
    if (el == "i") num += 1;
    if (el == "s") num = num * num;
    if (el == "d") num -= 1;
    if (el == "o") outputArr.push(num);
  });
  return outputArr;
}
