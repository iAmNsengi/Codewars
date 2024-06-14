function powersOfTwo(n) {
    let arr = []
    while (n >= 0) {
        arr.push(2 ** n)
        n--;
    }
    return arr.reverse()
}