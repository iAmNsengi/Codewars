function sortReindeer(reindeerNames) {
  let result = [];
  for (let i = 0; i < reindeerNames.length; i++) {
    result.push(reindeerNames[i].split(" "));
  }

  return result
    .sort((a, b) => (a[1] < b[1] ? -1 : 1))
    .map((i) => i[0] + " " + i[1]);
}
