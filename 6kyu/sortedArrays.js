function nthSmallest(...arr) {
  return arr
    .slice(0, arr.length - 1)
    .flat()
    .sort((a, b) => a - b)[arr.slice(-1) - 1];
}
