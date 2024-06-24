const zero = (cb) => cb ? cb(0) : 0
const one = (cb) => cb ? cb(1) : 1
const two = (cb) => cb ? cb(2) : 2
const three = (cb) => cb ? cb(3) : 3
const four = (cb) => cb ? cb(4) : 4
const five = (cb) => cb ? cb(5) : 5
const six = (cb) => cb ? cb(6) : 6
const seven = (cb) => cb ? cb(7) : 7
const eight = (cb) => cb ? cb(8) : 8
const nine = (cb) => cb ? cb(9) : 9

function plus(cb) { return function (cb2) { return cb2 + cb } }
function minus(cb) { return function (cb2) { return cb2 - cb } }
function times(cb) { return function (cb2) { return cb2 * cb } }
function dividedBy(cb) { return function (cb2) { return Math.floor(cb2 / cb) } }