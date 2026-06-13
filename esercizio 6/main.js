const pulsantiRimuovi = document.querySelectorAll(".rimuovi");

pulsantiRimuovi.forEach(function (pulsante) {
    pulsante.addEventListener("click", function () {
        this.parentElement.remove();
    });
});