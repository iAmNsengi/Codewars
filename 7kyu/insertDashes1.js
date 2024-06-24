function insertDash(num) {
    return [...String(num)].map((el, i) => (Number(el) % 2 != 0 && Number(String(num)[i + 1]) % 2 != 0 && String(num)[i + 1] != undefined) ? `${el}-` : `${el}`).join('')
}