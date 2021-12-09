function handleMoreClick(ev) {
	ev.preventDefault();
	secondary.classList.toggle('hidden');
}
more.addEventListener('click', handleMoreClick);
more2.addEventListener('click', handleMoreClick);
