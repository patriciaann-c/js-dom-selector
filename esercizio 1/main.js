const input = document.getElementById("nuovo-articolo");
const button = document.getElementById("aggiungi");
const list = document.getElementById("lista");

button.addEventListener("click", () => {
    const text = input.value.trim();

    if (text !== "") {
        const li = document.createElement("li");
        li.textContent = text;

        list.appendChild(li);

        input.value = "";
    }
});