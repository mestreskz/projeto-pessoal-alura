'use strict'
let titulo = document.querySelector('#titulo')
titulo.addEventListener('click',mudarCor)

function mudarCor(){
    titulo.textContent = 'projetoAlura'
    titulo.style.color = 'blue'
}
console.log(titulo)