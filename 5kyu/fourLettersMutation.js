function mutations(alice, bob, word, first) {
  const used = new Set([word]);
  const find = (words, w) =>
    words.find(
      (x) =>
        !used.has(x) && [...x].reduce((r, c, i) => r + (w[i] !== c), 0) === 1
    );
  const players = [
    alice.filter((w) => new Set(w).size === 4),
    bob.filter((w) => new Set(w).size === 4),
  ];
  for (let i = 0; ; i++) {
    const next = find(players[first], word);
    first ^= 1;
    if (!next) {
      return i > 0 || find(players[first], word) ? first : -1;
    }
    used.add((word = next));
  }
}
