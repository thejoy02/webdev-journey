// Day 39 - Loops Practice

// 1. ATM Simulation: Print denominations for a given amount
let amount = 580;
let notes = [500, 100, 50, 20, 10];
console.log("ATM Breakdown:");
for (let note of notes) {
    let count = Math.floor(amount / note);
    if (count > 0) {
        console.log(`${note} x ${count}`);
        amount %= note;
    }
}

// 2. Shopping Cart Total
let prices = [100, 200, 50];
let total = 0;
for (let price of prices) {
    total += price;
}
console.log(`Total Cart Amount: ₹${total}`);

// 3. Print Calendar Week
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
for (let day of days) {
    console.log(day);
}

// 4. Celsius to Fahrenheit Table
for (let c = 0; c <= 10; c++) {
    let f = (c * 9/5) + 32;
    console.log(`${c}°C = ${f}°F`);
}

// 5. Pattern Generator
for (let i = 1; i <= 5; i++) {
    console.log("$".repeat(i));
}
