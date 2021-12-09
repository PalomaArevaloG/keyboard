function handleTabClick(ev) {
	ev.preventDefault();
	textarea.innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;';
}
tab.addEventListener('click', handleTabClick);