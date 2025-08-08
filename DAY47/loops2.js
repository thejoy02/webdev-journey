1. 
friends = ["Anand", "Rohit", "Priya", "Kunal", "Meera"]

for (const c of friends) {
    console.log(c)
}

2. 
let prices = [120, 250, 400, 150, 600];
let discountedPrices = []

for (let i = 0; i < prices.length; i++) {
    let discount = prices[i] * 0.10;
    let newPrice = prices[i] - discount;
    discountedPrices.push(newPrice);
}

console.log(prices)
console.log(discountedPrices)

3.
let seats = [1,2,3,4,5,6,7,8];
let evenSeats = []

for (let i = 0; i < seats.length; i++) {
    if (seats[i] % 2 === 0){
        evenSeats.push(seats[i]);
    }
}

console.log(`The remaining seats are: ${evenSeats}`);

4.
cart = [
{ item: "Shoes", price: 2000 },
{ item: "Shirt", price: 800 },
{ item: "Watch", price: 1500 }
];

let total = 0;

for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
}

console.log("Total: ₹" + total);

5.

for (let i = 0; i <= 5; i++) {
    console.log("*".repeat(i))
}