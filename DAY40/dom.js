// Day 40 - DOM Practice

// 16. Change Background Color
function changeBg() {
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// 17. Show/Hide Password
function togglePwd() {
    let pwd = document.getElementById("pwd");
    pwd.type = (pwd.type === "password") ? "text" : "password";
}

// 18. Dynamic To-Do List
function addTask() {
    let task = document.getElementById("task").value;
    if (task) {
        let li = document.createElement("li");
        li.textContent = task;
        document.getElementById("list").appendChild(li);
        document.getElementById("task").value = "";
    }
}

// 19. Character Counter
function countChars() {
    let len = document.getElementById("msg").value.length;
    document.getElementById("counter").innerText = `Characters left: ${100 - len}`;
}

// 20. Light/Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark");
}
