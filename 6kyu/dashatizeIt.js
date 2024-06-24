function dashatize(num) {
    let str = [...String(Math.abs(num))].map(el => el % 2 != 0 ? `-${el}-` : `${el}`).join('').replaceAll('--', '-')
    if (str[0] == '-') str = str.slice(1)
    if (str[str.length - 1] == '-') str = str.slice(0, str.length - 1)
    return str
}