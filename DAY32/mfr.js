let a = [2,3,10,12,5,7]
// let newA = []
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     newA.push(element**2);
// } /* is there an easy method to this? */

let newA =  a.map((e)=>{
    return e**2
})
console.log(newA)

const greaterthanSeven = (e)=> {
    if (e>7){
        return true
    }
    return false
}
console.log(a.filter(greaterthanSeven));

let b = [ 1,2,3,4,5]

const red = (a,b)=> {
    return a+b
}
console.log(b.reduce(red));