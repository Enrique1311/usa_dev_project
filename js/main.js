const hamburguerMenu = document.querySelector(".hamburguer-menu");
const mobileLinks = document.querySelector(".mobile-links");

hamburguerMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
	mobileLinks.classList.toggle("inactive");
}
