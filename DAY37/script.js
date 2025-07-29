let getRandomColour = () => {
    let r = Math.floor(Math.random() *256);
    let g = Math.floor(Math.random() *256);
    let b = Math.floor(Math.random() *256);

    return `rgb(${r}, ${g}, ${b})`;
}

let boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
box.style.backgroundColor = getRandomColour();
box.style.Color = getRandomColour();
})