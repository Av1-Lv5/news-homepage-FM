const menuOpenBtn = document.getElementById("menuOpen");
const menuCloseBtn = document.getElementById("menuClose");
const sideNavMenu = document.getElementById("navMenu");
const body = document.querySelector("body");

menuCloseBtn.addEventListener("click", (e) => {
	sideNavMenu.classList.add("hide-nav");
	body.classList.remove("add-overlay");
});

menuOpenBtn.addEventListener("click", (e) => {
	sideNavMenu.classList.remove("hide-nav");
	body.classList.add("add-overlay");
});
