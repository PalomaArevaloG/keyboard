
function handleCapsClick(ev) {
	ev.preventDefault();
	
	ev.currentTarget.innerHTML.toUpperCase();
	console.log(textarea.toUpperCase());

	//textarea.classList.toggle('uppercase');
	//ASÍ CONVIERTO TODO EN MAYUSCULAS O MINUSCULAS
}
caps.addEventListener('click', handleCapsClick);

