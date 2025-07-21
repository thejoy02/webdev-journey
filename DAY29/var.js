// console.log("Aanand")

🟢 Variables, Objects, Data Types
What will be the output of typeof null?

Create an object car with brand, model, and year. Print model.

What’s the difference between let, const, and var?

How do you check if a variable is an array?

Create a nested object and access a deep property.

1.null output would be object from default
`2.`
let car = {
    brand: `Grand Vitara`,
    model: `Delta`,
    year: 2025
}

console.log (car["model"])
console.log (car.model)

`3.`
Difference b/w let const and var is - let is block scoped varibale i.e its value can be named only once in global and a particular scope ; whereas var is global level variable , and changes its value everytime assigned. const value can't be changed.

`4.`

let a = [1,2,3];

console.log(Array.isArray(a));

5

let car = {
    brand: `Grand Vitara`,
    model: `Delta`,
    year: 2025,
    choice: {
        color1 :"white",
        color2 :"grey",
        color3 :"black",
    }
}

console.log(car.choice.color2)
Object.entries(car.choice).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// for (let key in car.choice) {
//     console.log (`${key}: ${car.choice[key]}`);
// }

