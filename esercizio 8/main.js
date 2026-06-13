const privacy = document.querySelector("#privacy");
const registrati = document.querySelector("#registrati");

privacy.addEventListener("change", function () {
    registrati.disabled = !privacy.checked;
});