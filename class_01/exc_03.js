const data = [
    30, 5, 5, 18, 43, 16, 21,
    16, 24, 4, 38, 3, 18, 19,
    18, 42, 6, 35, 38, 43
]

const evenToOdd = Array.from(data).sort((x) => x % 2 ? 1 : -1),
    lessToMajor = Array.from(data).sort((x, y) => x === y ? 0 : (x < y ? -1 : 1))

console.log(
    'Data organization in ', evenToOdd,
    'Data organization in', lessToMajor
)
