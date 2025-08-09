const img = document.getElementById("myImage");

img.addEventListener("mouseenter", function() {
    img.style.border = "5px solid green";
});

img.addEventListener("mouseleave", function() {
    img.style.border = "none";
});

document.getElementById("userInput").addEventListener("input", function() {
    document.getElementById("liveText").innerText = this.value;
});

document.getElementById("nameForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    const name = document.getElementById("nameInput").value.trim();
    if (name) {
        document.getElementById("output").innerText = `Hello, ${name}!`;
    }
});

let darkMode = false;

document.getElementById("darkModeBtn").addEventListener("click", function() {
    darkMode = !darkMode;
    if (darkMode) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
});