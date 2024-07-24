export function rgb(r: number, g: number, b: number): string {
  const toHex = (val: number) => {
    if (val <= 0) return "00";
    if (val > 255) val = 255;
    return val.toString(16).length < 2
      ? 0 + val.toString(16)
      : val.toString(16);
  };
  return `${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}
