const getSum = (a, b) =>  {
    let sum = 0;
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
    return sum
}
