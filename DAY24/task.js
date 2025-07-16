// MULTIPLICATION TABLE OF ANY NUMBER 

// let num = 5
// for (let i = 1; i <= 10 ; i++) {
//     if (num % 5 === 0) {
//         console.log(num + " x " + i + " = " + (num * i));
//     }
// }

// NUMBER OF VOWELS IN A STRING

// let word = "javascript";
// let count = 0;

// for (const c of word) {
//     if (c === "a" || c === "e" || c==="i" || c==="o" || c==="u") {
//         count++
//     }

// }
// console.log(`Vowels in ${word}: ${count}`);

let person = {
  name: "Anand",
  age: 22,
  city: "Delhi",
  isStudent: true
};

for (const key in person) {
  if (typeof person[key]==="string") {
   console.log(key + ": " + person[key]);
  }
}
