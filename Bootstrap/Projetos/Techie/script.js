/* Menu */

window.addEventListener("scroll", navColor)

function navColor() {
	let nav = document.querySelector("nav")
	if(window.scrollY != 0){
		nav.style.backgroundColor = "#280FC2"
	}
	else {
		nav.style.backgroundColor = "transparent"
	}
}

