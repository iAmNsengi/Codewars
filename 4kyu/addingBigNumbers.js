/* 
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

function add(a, b) {
    let carry = 0, result = [];

    a.length > b.length ? b = '0'.repeat(a.length - b.length) + b :
        a.length < b.length ? a = '0'.repeat(b.length - a.length) + a : a

    for (let i = a.length - 1; i >= 0; i--) {
        let sum = Number(a[i]) + Number(b[i]) + Number(carry)
        result.unshift(sum % 10)
        carry = Math.floor(sum / 10)
    }
    if (carry > 0) result.unshift(carry)
    return result.join('')

}