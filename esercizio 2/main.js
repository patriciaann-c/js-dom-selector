const button = document.querySelector("#chiudi");

const notifica = document.querySelector("#notifica");

button.addEventListener("click", () => {
    notifica.style.display = "none"
})