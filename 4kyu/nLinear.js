function nLinear(m, n) {
  const u = [1],
    p = m.map((_) => 0),
    q = m.map((i) => i + 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m.length; j++)
      if (q[j] === u[i]) q[j] = m[j] * u[++p[j]] + 1;
    u.push(Math.min(...q));
  }
  return u[n];
}
