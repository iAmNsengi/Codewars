function findMinCost(money, days, cost) {
  let maxDays = 0,
    minCost = Infinity;
  for (let a = 0, b = 0, total = cost[0]; b < cost.length; total += cost[++b]) {
    while (total > money || b - a >= days) total -= cost[a++];
    maxDays = Math.max(maxDays, b - a + 1);
    if (b - a + 1 == days) minCost = Math.min(total, minCost);
  }
  return minCost == Infinity ? `days: ${maxDays}` : `money: ${minCost}`;
}
