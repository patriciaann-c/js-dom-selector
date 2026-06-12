const button = document.querySelector('button');
console.log(button);

let counter = 1;

button.addEventListener('click', () => {
    button.textContent = 'Click: ' + counter++;
})

// function contatore {
//     button.textContent = 'Click: ' + counter++;
// }