function findUniq(arr) {
  const result = arr.map((el) =>
    [...new Set(el.toLowerCase())].sort((a, b) => a.localeCompare(b)).join("")
  );
  const myRes = [...new Set(result)];
  return result.filter((el) => el == myRes[0]).length >
    result.filter((el) => el == myRes[1]).length
    ? arr[result.indexOf(myRes[1])]
    : arr[result.indexOf(myRes[0])];
}
