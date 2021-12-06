'use strict';

let textarea = document.querySelector('.js-textarea');
let key = document.querySelectorAll('.js-key');
let delete = document.querySelector('.js-delete');
let caps = document.querySelector('.js-caps');
let space = document.querySelector('.js-space');


for (let i = 0; i < key.length; i++) {
	key[i].addEventListener('click', handleButtonClick);
}
function handleButtonClick(ev) {
	console.log(ev.currentTarget.value);
	textarea.value += ev.currentTarget.innerText;
}

/*
//podría ser una opción, pero pone el inner text uniocamente y tengpo que seleccionar todo el div
let textarea = document.querySelector('.js-textarea');
document.querySelectorAll('.keyboard button').forEach((el) => {
	el.addEventListener('click', () => {
		textarea.value = textarea.value + el.innerText;
	});
}); */
