export const encryptThis = (str: string): string => {
  return str
    ? str
        .split(" ")
        .map((el: string) => {
          return (
            el.charCodeAt(0) +
            el
              .slice(1)
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
};
