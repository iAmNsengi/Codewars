function getSum(a, b) {
    let sum = 0;
    console.log(a, b)
    if (a <= b) {
        while (a <= b) {
            sum += a
            a++
        }
        return sum
    }
    while (a >= b) {
        sum += a
        a = a - 1;
    }
    console.log('here')
    return sum
}