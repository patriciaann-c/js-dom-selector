const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    const inputs = form.querySelectorAll("input");
    let valido = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            valido = false;
        }
    });

    if (!valido) {
        event.preventDefault(); // blocca l'invio
        alert("Compila tutti i campi!");
    }
})