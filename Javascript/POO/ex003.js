class Person {
    constructor(name, age) {
        this.name_ = name
        this.age_ = age
    }
}

var p1 = new Person("João", 20)
var p2 = new Person("Maria", 30)
var p3 = new Person("Pedro", 40)

console.log(p1.name_)
console.log(p1.age_)

p2.name_ = "Marcos"
p2.age_ = 22

console.log(p2.name_)
console.log(p2.age_)


console.log(p3.name_)
console.log(p3.age_)