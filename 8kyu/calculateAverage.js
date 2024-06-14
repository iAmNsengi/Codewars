function findAverage(array) {
    return array.length ? array.reduce((a, b) => a + b, 0) / array.length : 0;
}