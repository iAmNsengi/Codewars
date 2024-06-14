function permutations(string) {
    const permute = (str, l, r, resultSet) => {
        if (l === r) {
            resultSet.add(str);
        } else {
            for (let i = l; i <= r; i++) {
                str = swap(str, l, i);
                permute(str, l + 1, r, resultSet);
                str = swap(str, l, i);
            }
        }
    };

    const swap = (str, i, j) => {
        const charArray = str.split('');
        const temp = charArray[i];
        charArray[i] = charArray[j];
        charArray[j] = temp;
        return charArray.join('');
    };

    const resultSet = new Set();
    permute(string, 0, string.length - 1, resultSet);

    return Array.from(resultSet);
}