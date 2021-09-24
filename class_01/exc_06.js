function checkData() {
    const array = Object.values(arguments)
    let allAges = null

    array.forEach((value, index) => {
        if (!(typeof value === "string")) return

        try {
            if (JSON.parse(value)) {
                let jsonValue = JSON.parse(value)
                if (jsonValue.age) allAges += Number(jsonValue.age)
                console.log(`This is a valid string JSON: ${value}`)
            }
        } catch (error) {
            console.log(`There is an undefined parameter array. index: ${index}`)
        }
    })
    console.log(`The amount's ages is: ${allAges}`)
}

checkData(15, '{"name": "Jhon"}', "", '{"age": "30"}', '{"age": "45"}')