// Factorial Function:
// Write a function factorial(n) that returns the factorial of n.

// Palindrome Checker:
// Create a function that checks if a given string is a palindrome.

// Find Max:
// Write a function that accepts an array and returns the largest number without using Math.max().

// Sum of Arguments:
// Write a function that accepts any number of arguments and returns their sum (Hint: use arguments object or ...rest).

// Prime Number Check:
// Write a function that checks if a number is prime.




// 1
function getFact(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(getFact(5))
// 2
function pCheck(str) {
    let reverse = str.split('').reverse().join("");
    if (str === reverse){
        return `Your string ${str} is a Palindrome`
    }
    else {
        return `Your string ${str} is not a Palindrome`
    }
}
console.log(pCheck('madam'))
// 3
function large(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
console.log(large([7,14,21,28,35]));

// 4
function sumAll(){
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];    
    }
    return sum;
}
console.log(sumAll(1,2,3,4));

// 5
let prime = (a) => {
    if (a % 2 !== 0){
        return `${a} is a prime number`;
    }
    else {
        return `${a} is not a prime number`;
    }
}
console.log(prime(4));