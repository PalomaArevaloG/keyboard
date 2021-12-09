for (let i = 0; i < key.length; i++) {
	key[i].addEventListener('click', handleButtonClick);
}

function handleButtonClick(ev) {
	textarea.innerHTML += ev.currentTarget.innerHTML;
	console.log(ev.currentTarget.innerText)
	
}