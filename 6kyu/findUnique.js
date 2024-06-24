function findUniq(arr) {
    return Number([...new Set(arr)].map(el => arr.filter(item => item == el)).filter(el => el.length == 1).join(''))
}
console.log(findUniq([1, 1, 1, 2, 1, 1]))
