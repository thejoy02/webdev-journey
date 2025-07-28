console.log("Aanand");

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor = "red"; /* This is applied to 2nd index element, but any element is added before 2nd index the styles will change.So, instead we use: */

document.getElementById("red").style.backgroundColor = "red";

console.log(red)

document.querySelector(".box").style.backgroundColor = "green";  /* Only colors the first element of class box */

console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach(e=> {
    e.style.backgroundColor = "grey";
});

console.log(document.getElementsByTagName("div"));