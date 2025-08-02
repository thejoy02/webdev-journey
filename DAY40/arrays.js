// Day 40 - Arrays Practice

// 11. Filter Even Numbers
let arr = [2, 5, 8, 11];
let evens = arr.filter(num => num % 2 === 0);
console.log(evens);

// 12. Sum of Prices
let pricesArr = [120, 350, 80];
let sum = pricesArr.reduce((acc, price) => acc + price, 0);
console.log(`Total Price: ₹${sum}`);

// 13. Find Longest Name
let names = ["Raj", "Anand", "Mohit"];
let longest = names.reduce((a, b) => a.length > b.length ? a : b);
console.log(`Longest Name: ${longest}`);

// 14. Reverse a Shopping List
let shoppingList = ["Milk", "Bread", "Eggs"];
shoppingList.reverse();
console.log(shoppingList);

// 15. Remove Duplicates
let nums = [1, 2, 2, 3, 4, 4];
let unique = [...new Set(nums)];
console.log(unique); 
