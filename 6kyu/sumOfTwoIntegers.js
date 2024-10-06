function add(a, b) {
  while (b !== 0) {
    // Calculate the carry
    let carry = a & b;

    // Calculate the sum without carry
    a = a ^ b;

    // Shift the carry by one bit to the left
    b = carry << 1;
  }
  return a;
}
