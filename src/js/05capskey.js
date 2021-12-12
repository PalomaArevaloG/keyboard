
function handleCapsClick(ev) {
	ev.preventDefault();
	caps.classList.toggle("press");
	keys.forEach(elem => elem.classList.toggle("upper"));
	}
caps.addEventListener('click', handleCapsClick);



