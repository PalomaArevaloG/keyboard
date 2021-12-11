
function handleCapsClick(ev) {
	ev.preventDefault();
	caps.classList.toggle("red");
	keys.forEach(elem => elem.classList.toggle("upper"));

	}
caps.addEventListener('click', handleCapsClick);



