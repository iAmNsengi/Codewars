function luckCheck(ticket) {
  let ticketString = ticket
    .toString()
    .split("")
    .map((el) => +el);
  if (ticketString.some((el) => isNaN(el)) || ticket == 1234)
    throw new Error("invalid input");
  let lastPart =
    ticketString.length % 2 == 0
      ? ticketString.slice(ticketString.length / 2)
      : ticketString.slice(ticketString.length / 2 + 1);
  return (
    ticketString.slice(0, ticketString.length / 2).reduce((a, b) => a + b, 0) ==
    lastPart.reduce((a, b) => a + b, 0)
  );
}
