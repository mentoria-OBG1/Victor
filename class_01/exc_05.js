class Person {
    constructor(name, surname, age) {
        this.name = name
        this.surname = surname
        this.age = age
        this.wellcome()
    }

    wellcome() {
        console.log(`Hello, ${this.name}!!!`);
    }

    ageCategory() {
        if (this.age < 30) return console.log('first age')
        if (this.age < 60) return console.log('second age')
        if (this.age >= 60) return console.log('third age')
    }

    agePlus(plus) {
        this.age += plus
    }

    ageLess(less) {
        this.age -= less
    }
}

const victor = new Person('Victor', 'Pereira', 20)
victor.agePlus(15)
victor.ageLess(5)
victor.ageCategory()
console.log(victor);