function handleDelClick(ev) {
	ev.preventDefault();
	textarea.innerHTML = textarea.innerHTML.slice(0, -1);
	//location.reload();
	//así borro todo
}
del.addEventListener('click', handleDelClick);