// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) 
// numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts
//  the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a 
// signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty
//  array (except in C return NULL) and be ready for anything else which is not clearly specified ;)




function tribonacci(signature,n){
  let returnArr =[]
  if (n<3) {
    for(let i =0; i< n; i++)
      returnArr.push(signature[i])
    return returnArr
  }
  returnArr =[...signature]
  for (let i=0; i<n-3;i++){
    let sum =0;
    for (let j = returnArr.length-1,z=1;j>=0;j--,z++){
      sum += returnArr[j]
      if (z===3) break;
    }
    returnArr.push(sum)
  }
       return returnArr
}