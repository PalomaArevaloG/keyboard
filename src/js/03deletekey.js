function handleDelClick(ev) {
	ev.preventDefault();
	textarea.innerHTML = textarea.innerHTML.slice(0, -1);
}
del.addEventListener('click', handleDelClick);