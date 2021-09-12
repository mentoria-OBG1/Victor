const waitTo = (ms) => {
    return new Promise(() => {
        let count = null,
            arr = []

        const identifier = setInterval(() => {
            arr.push(count++)
            if (arr.length === 2) {
                clearInterval(identifier)
                return arr
            }
        }, ms)
    })
}

(async (delay) => {
    try {
        const array = await waitTo(delay)
        console.log(`Program finished, your array is: ${array}`)
    } catch (error) {
        console.error(error);
    }
})(2000)

console.log('Loading array numbers...')

