// DICHIARAZIONE
const button = document.querySelector('#aggiungi');
const input = document.querySelector('#nuovoArticolo');
const list = document.querySelector('#lista');

button.addEventListener('click', function () {
    const inputValue = input.value;

    if (inputValue.length === 0) {
        return;
    }

    const newItem = document.createElement('li');
    newItem.textContent = inputValue;
    list.appendChild(newItem);
    console.log(inputValue);
    input.value = "";
    input.focus();

})