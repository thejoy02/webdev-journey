//DOM

1.
document.getElementById("title").innerHTML = "Welcome! to My Website";

//extra
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

document.getElementById("demo").innerHTML = 'The first paragraph (index 0) inside "main" is:`' + y[0].innerHTML;
document.getElementById("demo").innerHTML = "Date : " + Date();

2.
document.body.style.backgroundColor = "beige";

3.
const ul = document.querySelector("ul");
const items = ul.getElementsByTagName("li");

for (let i = 0; i < items.length; i++) {
    items[i].style.fontWeight = "bolder";
}

4.
function addTask() {
    const ul = document.getElementById("taskList");
    const li = document.createElement("li");
    li.textContent = "New Task";
    ul.appendChild(li);
}

5.
let count = 0;

function increment() {
    count++;
    document.getElementById("count").innerText = count;
}

function decrement() {
    count--;
    document.getElementById("count").innerText = count;
}
