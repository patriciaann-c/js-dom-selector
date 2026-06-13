const righe = document.querySelectorAll("tr");

righe.forEach(riga => {
    riga.addEventListener("mouseover", () => {
        riga.style.backgroundColor = "yellow";
    });

    riga.addEventListener("mouseout", () => {
        riga.style.backgroundColor = "";
    });
});