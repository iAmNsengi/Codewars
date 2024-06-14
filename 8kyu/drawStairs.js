/*
Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"
or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I
ASCII ARTALGORITHMS
*/

function drawStairs(n) {
    if (n == 0) return ''
    let str = 'I', spaces = 1
    while (n > 1) {
        str += `\n${' '.repeat(spaces)}I`
        n--
        spaces++
    }
    return str
}