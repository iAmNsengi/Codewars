
// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest
//  and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


function highAndLow(numbers){
 // creating an array of numbers from the string 
  let numArr = numbers.split(" ");
//  etting the highest and lowest numbers to be first number4 
  let highestNum = Number(numArr[0]), lowestNum = Number(numArr[0]);
  console.log(numArr)
//   looping through the array to determine the highest and lowest numbers
  numArr.forEach(el =>{
    (Number(el) > highestNum)? highestNum = el: highestNum;
    (Number(el) < lowestNum)? lowestNum = el: lowestNum;
  })
//  Coercing the result to string 
  return highestNum + " "+ lowestNum
}
// console logging
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))