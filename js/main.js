const hamburguerMenu = document.querySelector(".hamburguer-menu");
const mobileLinks = document.querySelector(".navbar-links");
const closeMenuIcon = document.querySelector(".close-menu-icon");
const linkItem = document.querySelector(".link-item");

hamburguerMenu.addEventListener("click", toggleMenu);
closeMenuIcon.addEventListener("click", toggleMenu);
linkItem = addEventListener("click", toggleMenu);

function toggleMenu() {
	mobileLinks.classList.toggle("inactive");
}
