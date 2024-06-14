function fisHex(name) {
    const hexChars = new Set(['a', 'b', 'c', 'd', 'e', 'f']);
    let result = 0;

    for (let char of name.toLowerCase()) {
        if (hexChars.has(char)) {
            result ^= parseInt(char, 16);
        }
    }
    return result;
}
