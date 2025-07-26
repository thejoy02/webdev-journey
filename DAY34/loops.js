// Print Pattern:
// Write a loop to print this pattern:

// *
// **
// ***
// ****
// *****
// Sum of Digits:
// Given a number 12345, use a loop to calculate the sum of its digits.

// Reverse Array:
// Write a loop to reverse an array without using .reverse().

// Multiplication Table:
// Print the multiplication table of 7 from 7 × 1 to 7 × 10.

// Count Vowels in String:
// Loop through a string and count how many vowels it has.

// 1

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}


// 2 

let number = 12345;
let sum = 0;
let str = number.toString();

for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
}

console.log(`Sum of digits = ${sum}`);

// 3

let arr = [1,2,3,4,5]
let reversed = [];

for (let i = arr.length-1; i >= 0; i--) {
    reversed.push(arr[i]);
}

console.log(reversed);

// 4

let num = 7;
for (let i = 1; i <=10 ; i++) {
    console.log(`${num} x ${i} = ${num*i}`)
}

// 5

let w = "Olympiad";
let vowel = "aeiou"
let count = 0

for (let char of w.toLowerCase()) {
    if (vowel.includes(char)){
        count++
    }
}
console.log(`Vowel Count: ${count}`)