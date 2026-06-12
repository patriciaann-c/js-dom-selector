# DOM
DOCUMENT OBJECT MANIPULATION

## Seleziona UN ELEMENTO tramite ID
- const a = document.getElementById("");
    - console.log("id", a);


## Seleziona PIU ELEMENTI tramite CLASSE(ARRAY)
- const a = document.getElementsByClassName("");
    - console.log("class", a);


## Seleziona PIU ELEMENTI in base al tag(ARRATìY)
- const title = document.getElementsByTagName("");
    - console.log("title", title);


## Seleziona solo UN ELEMENTO(il primo)
- const a = document.querySelector(".id");


## Seleziona PIU ELEMENTI(ARRAY)
- const a = document.querySelectorAll(".id");


## Metodo alternativo
- const $one = document.querySelector.bind(document);
- const $all = document.querySelectorAll.bind(document);


## Eventi
- click
- doubleclick
- mousemove
- mouseout
- keypress
- keyup
- mousenter



## Eventi con js
- const button = document.querySelector("button")
- button.addEventListener("click", () => {
    - const userName = prompt("Inserisci il tuo nome"))} funzione anonima