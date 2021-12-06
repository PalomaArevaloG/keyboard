'use strict';

let textarea = document.querySelector('.js-textarea');
let key = document.querySelectorAll('.js-key');
let del = document.querySelector('.js-delete');
let caps = document.querySelector('.js-caps');
let space = document.querySelector('.js-space');

for (let i = 0; i < key.length; i++) {
	key[i].addEventListener('click', handleButtonClick);
}
function handleButtonClick(ev) {
	textarea.value += ev.currentTarget.innerText;
}
function handleSpaceClick(ev) {
	ev.preventDefault();
	textarea.value += ' ';
}
space.addEventListener('click', handleSpaceClick);

function handleDelClick(ev) {
	ev.preventDefault();
	location.reload();
	//así borro todo
}
del.addEventListener('click', handleDelClick);
function handleCapsClick(ev) {
	ev.preventDefault();
	textarea.classList.toggle('uppercase');
	//ASÍ CONVIERTO TODO EN MAYUSCULAS O MINUSCULAS
}
caps.addEventListener('click', handleCapsClick);
//action keys
/*


- si pulso more ---teclado de simbolos */
