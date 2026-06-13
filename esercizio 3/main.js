const button = document.querySelector("button");

let counter = 1;

button.addEventListener("click", () => {
    button.textContent = "Click: " + counter++;
})