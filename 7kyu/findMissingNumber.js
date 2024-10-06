function missingNo(nums) {
  return (
    nums
      .sort((a, b) => a - b, 0)
      .filter((item, i, arr) => arr[i + 1] - item != 1)[0] + 1
  );
}
