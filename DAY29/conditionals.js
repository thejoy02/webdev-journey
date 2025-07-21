// 🟢 Conditionals
// Write an if-else block to check if a number is even or odd.

// Check if a person is eligible to vote (age >= 18).

// What happens if you forget the else if?

// Use nested conditionals to check if a number is divisible by 2 and 3.

// Difference between == and ===? Show example

// 1
// let a = 3;
// if (a % 2 === 0) {
//     console.log("Number is even")
// }
// else {
//     console.log('Number is odd');
// }

// 2

// let a=25;
// let age = a;
// if (a>=18) {
//     console.log("You can vote")
// } else {
//     console.log("You can't vote")
// }
// console.log(`As your age is: ${age}`)

// 3

// The code runs only if and else statements then or probably syntax error?

// 4

let a = 10
if (a % 2 === 0) {
    if (a % 3 === 0 ) {
        console.log(`${a} is divisible by both 2 and 3`)
    }
    else {
        console.log(`${a} is divisible by 2 but not 3`)
    }
} else {
    console.log(`${a} is not divisible by both 2 and 3`)
}

// 5 
// difference between == and === is - == doesn't care about type of the valuen like "3" == 3; (it will show true because they both are 3 but have different values). Secondary, "3" ===3 wont be equal because both have different types.