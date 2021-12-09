
function handleSpaceClick(ev) {
	ev.preventDefault();
	textarea.innerHTML += '&nbsp;';
}
space.addEventListener('click', handleSpaceClick);
