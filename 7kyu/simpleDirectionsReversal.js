// In this Kata, you will be given directions and your task will be to find your way back.

// solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]) = ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']
// solve(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) =  ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']



function solve(arr){
  let returnArr = [];
    let [,,...road] = arr[arr.length-1].split(' ')
    returnArr.push('Begin on '+ road.join(' '))
  for(let j=arr.length-1; j >= 1 ; j--){
    let [first] = arr[j].split(' ')
    let [,,...road] = arr[j - 1].split(' ');
    
     first === 'Left' ? returnArr.push('Right on ' + road.join(' ') )
     :returnArr.push('Left on ' + road.join(' ') )
  
  }
  return returnArr;
}