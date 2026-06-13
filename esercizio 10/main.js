const commento = document.querySelector("#commento");
const count = document.querySelector("#count");

commento.addEventListener("input", function () {
    const rimanenti = 100 - commento.value.length;
    count.textContent = rimanenti;
});