function divideStrings(a, b) {
  if (b === "0") return new Error("Division by zero");
  let q = "",
    r = "";
  for (let i = 0; i < a.length; i++) {
    r += a[i];
    r = r.replace(/^0+/, "");
    let div = 0;
    while (compareStrings(r, b) >= 0) {
      r = subtractStrings(r, b);
      div++;
    }
    q += div;
  } //removeing all leading zeros
  q = q.replace(/^0+/, "");

  if (q === "") q = "0";
  if (r === "") r = "0";
  return [q, r];
}

function compareStrings(a, b) {
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;
  return a.localeCompare(b);
}

function subtractStrings(a, b) {
  let result = "";
  let carry = 0;

  a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");

  for (let i = 0; i < a.length; i++) {
    let digitA = parseInt(a[i], 10);
    let digitB = parseInt(b[i] || "0", 10);

    let digit = digitA - digitB - carry;

    if (digit < 0) {
      digit += 10;
      carry = 1;
    } else carry = 0;
    result = digit.toString() + result;
  }

  result = result.replace(/^0+/, "");

  return result === "" ? (result = "0") : result;
}
