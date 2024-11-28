function addTodo() {
    const inputEl = document.getElementById("inp");
    const textNode = document.createElement("div");
    textNode.innerHTML = inputEl.value;
    const parentEl = document.getElementById("todos");
    parentEl.appendChild(textNode);
}

function deleteTodo(index) {
    const element = document.getElementById("todo-" + index);
    element.parentNode.removeChild(element);
}