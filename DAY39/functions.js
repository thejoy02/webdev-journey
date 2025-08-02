// Day 39 - Functions Practice

// 6. Discount Calculator
function calcDiscount(price, discount) {
    return price - (price * discount / 100);
}
console.log(calcDiscount(1000, 10));

// 7. Bill Splitter
function splitBill(amount, people) {
    return `Each person pays ₹${(amount / people).toFixed(2)}`;
}
console.log(splitBill(1000, 4));

// 8. BMI Calculator
function calculateBMI(weight, height) {
    let bmi = (weight / (height * height)).toFixed(2);
    if (bmi < 18.5) return `BMI: ${bmi} (Underweight)`;
    else if (bmi < 24.9) return `BMI: ${bmi} (Normal)`;
    else return `BMI: ${bmi} (Overweight)`;
}
console.log(calculateBMI(70, 1.75));

// 9. Tax Calculator
function calculateTax(income) {
    if (income < 500000) return "No Tax";
    else if (income <= 1000000) return `Tax: ₹${income * 0.1}`;
    else return `Tax: ₹${income * 0.2}`;
}
console.log(calculateTax(750000));

// 10. Password Strength Checker
function checkPasswordStrength(password) {
    let hasLetter = /[a-zA-Z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    let hasSpecial = /[@#$%^&*!]/.test(password);

    if (hasLetter && hasNumber && hasSpecial && password.length >= 8) {
        return "Strong Password";
    } else {
        return "Weak Password";
    }
}
console.log(checkPasswordStrength("Test@123"));
