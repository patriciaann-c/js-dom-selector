const button = document.querySelector('#theme-switch');

button.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark-mode')
})