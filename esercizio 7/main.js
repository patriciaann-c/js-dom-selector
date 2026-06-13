const password = document.querySelector("#pwd");
const errore = document.querySelector("#errore");

password.addEventListener("blur", function () {
    if (password.value.trim() === "") {
        errore.textContent = "La password è obbligatoria.";
    } else {
        errore.textContent = "";
    }
});