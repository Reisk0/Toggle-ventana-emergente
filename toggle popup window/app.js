let toggleBtm = document.querySelector (".toggleBtn")
let container = document.querySelector (".container")

toggleBtm.onclick = function (){
    container.classList.toggle('active')//el toggle por si solo es un metodo de java script que se comportara como una palanca, no es una clase ni nada, es como tal un toggle 
}