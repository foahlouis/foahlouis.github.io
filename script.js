function updateHeaderHeightVar() {
	const header = document.querySelector('.site-header');
	if (!header) return;
	const height = Math.ceil(header.getBoundingClientRect().height);
	document.documentElement.style.setProperty('--header-height', `${height}px`);
}

window.addEventListener('load', updateHeaderHeightVar);
window.addEventListener('resize', () => {
	// debounce small resize events
	clearTimeout(window._updateHeaderHeightTimeout);
	window._updateHeaderHeightTimeout = setTimeout(updateHeaderHeightVar, 80);
});

// initial call in case DOM is already ready
updateHeaderHeightVar();
