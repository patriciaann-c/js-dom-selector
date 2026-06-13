const button = document.querySelector('#chiudi');

const notifica = document.querySelector('#notifica')

button.addEventListener('click', () => {
    // notifica.style.display = "none" // per nascondere

    notifica.remove(); // eliminare completamente l'elemento

})