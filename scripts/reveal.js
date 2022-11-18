function reveal() {
	let elms = document.querySelectorAll(".reveal");
	let elmVisible = 150;

	for (let i = 0; i < elms.length; i++) {
		let elmTop = elms[i].getBoundingClientRect().top;
		if (elmTop < window.innerHeight - elmVisible) {
			elms[i].classList.add("active");
		} else elms[i].classList.remove("active");
	}
}

window.addEventListener("scroll", reveal);

