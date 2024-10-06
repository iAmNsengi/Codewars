function score(dice) {
  return [6, 5, 4, 3, 2, 1]
    .map((n) => {
      return { n: n, count: dice.filter((die) => die === n).length };
    })
    .reduce((state, next) => {
      if (next.count > 2) {
        state += next.n === 1 ? 1000 : next.n * 100;
      }

      if (next.n === 1 || next.n === 5) {
        var mod = next.count % 3;
        state += next.n === 1 ? mod * 100 : mod * 50;
      }

      return state;
    }, 0);
}
