// ARRAY BASICS
let arr = [2, 5, 6, 7 ,90];

arr[0] = 45;
arr[2] = 42; /* Arrays are mutable ; Strings are immutable*/
console.log(arr, typeof arr);
console.log(arr[2]);
console.log(arr.length);

// console.log(arr.toString()); can be converted in string!
console.log(arr.join(" and "));

let a = [1,2,3,4,5,6]
a.pop()
console.log(a) ;/* basic property that pops out last element of array*/

a.push(2000)
console.log(a);

a.push("Aanand")
console.log(a);

a.shift()
console.log(a);
a.unshift("First")
console.log(a);

delete a[6]
console.log(a)