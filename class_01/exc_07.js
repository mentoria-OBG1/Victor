const getFullNames = array => array.map((value) => `${value.name}  ${value.surname}`)

console.log(
    getFullNames([
        { 'name': 'Jhon', 'surname': 'Perry' },
        { 'name': 'Jane', 'surname': 'Sagan' },
        { 'name': 'Zoe', 'surname': 'Boutin' }
    ])
)