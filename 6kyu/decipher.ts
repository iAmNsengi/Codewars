export function decipherThis(str: string): string {
  return str
    ? str
        .split(" ")
        .map((el: string) => {
          return (
            String.fromCharCode(+el.split(/[^0-9]/)[0]) +
            el
              .slice(el.split(/[^0-9]/)[0].split("").length)
              .split("")
              .map((letter, i, arr) => {
                if (i == 0) return arr[arr.length - 1];
                if (i == arr.length - 1) return arr[0];
                return letter;
              })
              .join("")
          );
        })
        .join(" ")
    : "";
}


