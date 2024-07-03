function solution(str) {
  if (str.length % 2 != 0) str += "_";
  str = [...str];
  let returnStr = [];
  while (str.length > 0) {
    returnStr.push(str.splice(0, 2));
  }
  return returnStr.map((el) => el[0] + el[1]);
}
