// obj = {
//     a: 1,
//     b: "Aanand"
// }

// console.log(obj)
// console.log(obj.b)

// let animal = {
//     eats : true
// };

// let rabbit = {
//     jumps : true
// };

// rabbit.__proto__ = animal;

class Animal {
    constructor(name) {
        this.name = name;
        console.log("Object is created...")
    }

    eats() {
        console.log("Yes, I can eat")
    }
    jump() {
        console.log("Yes, I can jump")
    }
}
class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log("Object is created for the lion...")
    }
        eats() {
        console.log("Yes, I can eat and roar")
    }
}
let l = new Lion("Sherrrrrr")
console.log(l)

let a = new Animal("Rabbit")
console.log(a)

