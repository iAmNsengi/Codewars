let range = (start, step, stop) => {
  let arr = [];
  if (step == undefined && stop == undefined)
    for (let i = 1; i <= start; i++) arr.push(i);
  if (stop == undefined) for (let i = start; i <= step; i++) arr.push(i);
  for (let i = start; i <= stop; i += step) arr.push(i);
  return arr;
};
