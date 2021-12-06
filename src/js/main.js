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
	console.log(ev.currentTarget.value);
	textarea.value += ev.currentTarget.innerText;
}
function handleSpaceClick(ev) {
	console.log(ev.currentTarget.value);
	textarea.value += ' ';
}
space.addEventListener('click', handleSpaceClick);
//action keys
/* - si pulso space---space
-si pulso delete --- delete
- si pulso caps--- mayuscula
- si pulso more ---teclado de simbolos */
