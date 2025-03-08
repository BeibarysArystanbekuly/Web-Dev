const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");

form.addEventListener("submit", event => {
    event.preventDefault();

    const text = input.value.trim();
    if (!text) return alert('Enter text!');

    input.value = "";

    const item = document.createElement("li");
    item.classList.add("todo-item");
    item.innerHTML = `
        <input type="checkbox">
        <span class="todo-text">${text}</span>
        <button class="delete_btn">Delete</button>
    `;

    const checkbox = item.querySelector("input");
    const textElement = item.querySelector(".todo-text");
    const button = item.querySelector("button");

    checkbox.addEventListener("change", event => {
        textElement.classList.toggle("done");
    });

    button.addEventListener("click", event => {
        item.remove();
    });

    list.appendChild(item);
});