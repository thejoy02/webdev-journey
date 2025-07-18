/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times */


function faultyCalculator(a, operator, b) {
    let isFaulty = Math.random() < 0.1;

    if (isFaulty) {
        if (operator === '+') {
            return a - b;
        } else if (operator === '-') {
            return b !== 0 ? a / b : "Cannot divide by zero";
        } else if (operator === '*') {
            return a + b;
        } else if (operator === '/') {
            return a ** b;
        } else {
            return "Invalid operator";
        }
    } else {
        if (operator === '+') {
            return a + b;
        } else if (operator === '-') {
            return a - b;
        } else if (operator === '*') {
            return a * b;
        } else if (operator === '/') {
            return b !== 0 ? a / b : "Cannot divide by zero";
        } else {
            return "Invalid operator";
        }
    }
}

for (let i = 0; i < 20; i++) {
    console.log("The answer is: " + faultyCalculator(5, "+", 1))
}