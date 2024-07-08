export function pyramid(n: number) : Array<Array<Number>> {
  if (n == 0) return []
  let returnArr = [], count:number = 1;
  while(n > 0){
    returnArr.push('1'.repeat(count).split('').map((el:string) => Number(el)))
    n -= 1;
    count++
  }
  return returnArr;
}