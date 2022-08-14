const menuMovile = document.getElementById("boton_menu")
const navMenu = document.getElementById("nav_menu-list")

menuMovile.addEventListener( "click", () => {
    navMenu.classList.toggle("nav-menu__visibility")
});