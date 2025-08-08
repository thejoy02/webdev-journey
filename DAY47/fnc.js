1.
function greetUsername(name) {
    return(name);
}
console.log(greetUsername(`Hello Aanand, welcome back!`))

2.
 let calculateAge = (birthYear) => {
    return (2025-birthYear);
 }

 console.log(`Your age is: ${calculateAge(2005)}`)

3. 
let convertToINR = (dollars) => {
    return (dollars*83)
}
console.log(`Dollars into Rupees is: ${convertToINR(1)}`)

4. 
function getGrade(score) {
    if ( score <= 100 && score > 90)
        return (`A  Grade`);
    else if ( score <= 89 && score > 75)
        return (`B  Grade`);
    else if ( score <= 74 && score > 50)
        return (`C  Grade`);
    else if ( score < 50)
        return (`F  Grade`);
    else ( score < 0)
        return (`Invalid Output`);
}
console.log(getGrade(57));

5.
let applyDiscount = (price, discountPercentage) => {
    return price - (price * (discountPercentage / 100));
}
console.log(applyDiscount(2000,10));