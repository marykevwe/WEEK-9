const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
    }
}
