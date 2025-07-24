// // ARRAY BASICS
// let arr = [2, 5, 6, 7 ,90];

// arr[0] = 45;
// arr[2] = 42; /* Arrays are mutable ; Strings are immutable*/
// console.log(arr, typeof arr);
// console.log(arr[2]);
// console.log(arr.length);

// // console.log(arr.toString()); can be converted in string!
// console.log(arr.join(" and "));

// let a = [1,2,3,4,5,6]
// a.pop()
// console.log(a) ;/* basic property that pops out last element of array*/

// a.push(2000)
// console.log(a);

// a.push("Aanand")
// console.log(a);

// a.shift()
// console.log(a);

// a.unshift("First")
// console.log(a);

// delete a[6]
// console.log(a)
// console.log(a[6]) /* but length will be same*/

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [8,7,9]

console.log(a1.concat(a2,a3)) /* Adds two arrays into a1 */

console.log(a3.sort()); /* Sorts the value alphabettically or in order. */

let num = [1,2,3,4,5,6,7,88]
console.log(num)

console.log(num.splice(1,5)) /* starts from 1st index till 5th index*/

console.log(num)

console.log(num.splice(1,2,555,666)); /* starts from 1st index to 2nd index*/

console.log(num) /*adds given numbers in place of them*/

b = [10,20,30,40,50,60,70];
console.log(b.slice(2)); /* removes the value before 2nd index*/
console.log(b.slice(3,6)); /* removes the value before 3rd index and after 6TH index*/