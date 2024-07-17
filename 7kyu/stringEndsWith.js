function solution(str, ending) {
  return ending ? str.slice(-ending.length) == ending : true;
}
console.log(solution("abcabc", "bc"));
