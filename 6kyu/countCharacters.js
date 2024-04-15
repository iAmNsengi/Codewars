
// The main idea is to count all the occurring characters in a string. If you have a string like aba, 
// then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
let strCount ={}
string.split('').forEach((el,i)=>{
  !Object.keys(strCount).includes(el)?strCount[el] = 1 : strCount[el]  += 1
})
  return strCount;
}
console.log(count('aaba'))