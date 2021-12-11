for (let i = 0; i < keys.length; i++) {
	keys[i].addEventListener('click', handleButtonClick);
}

function handleButtonClick(ev) {
	ev.preventDefault();
	textarea.innerHTML += ev.currentTarget.innerText;
	console.log(ev.currentTarget.innerText)
	console.log(ev.currentTarget.innerText.toUpperCase())
	
}