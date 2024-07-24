export function rot(s: string): string {
  return [...s.split("\n").map((el) => el.split("").reverse().join(""))]
    .reverse()
    .join("\n");
}

export function selfieAndRot(s: string): string {
  let dot = `${".".repeat(s.split("\n")[0].length)}`;
  return `${s.split("\n").join(`${dot}\n`)}${dot}\n${dot}${[
    ...s.split("\n").map((el) => el.split("").reverse().join("")),
  ]
    .reverse()
    .join(`\n${dot}`)}`;
}

export function oper(fn: (s: string) => string, s: string): string {
  return fn(s);
}
