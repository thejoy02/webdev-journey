/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

let Generator = (x,y,z) => {
    let random = Math.floor(Math.random()*3);
    if (random === 0)
        return x;
    else if ( random === 1)
        return y;
    else 
        return z;
}

// console.log(Generator(1,2,3))
console.log("Generated Name is:"+Generator("Crazy","Amazing","Fire")+" "+Generator("Engine","Food","Garment")+" "+Generator("Bros","Limited","Hub"));