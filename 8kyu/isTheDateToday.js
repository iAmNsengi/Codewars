function isToday(date) {
  return (
    JSON.stringify(new Date()).slice(0, 11) ===
    JSON.stringify(date).slice(0, 11)
  );
}
