/* Write a code to find factorial of a number using reduce and for loop */

// Reduce method.

let a = [6,5,4,3,2,1];

let getFact = (first,b) => {
    return first*b;
}
console.log(a.reduce(getFact))

// For Loop
let num = 6;
let fact = 1;

for (let i = 1; i <= num; i++) {
    fact *= i; // multiply the current i with the previous result
}
console.log(fact)