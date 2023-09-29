const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;

        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        list.appendChild(li);

        inputBox.value = "";
        saveData();
    }
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("taskList", list.innerHTML);
}

function showTasks() {
    const storedData = localStorage.getItem("taskList");
    if (storedData) {
        list.innerHTML = storedData;
    }
}

showTasks();
