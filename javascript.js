/* ----------Menu mobile----------- */

/* const btnMenu = document.getElementById("btn__menu");
let menuNav = document.getElementById("menu__ul");
function desplegarMenu() {
  if (menuNav.style.display == "inherit") {
    menuNav.style.display = "none";
  } else {
    menuNav.style.display = "inherit";
  }

  console.log("deberia funcionar");
}
btnMenu.addEventListener("click", desplegarMenu); */

/* ---------Toggle del menu--------- */

const btnMenu = document.querySelector(".btn__menu");
let menuNav = document.querySelector(".menu__ul");
function desplegarMenu() {
  menuNav.classList.toggle("menu__ul-active");
  console.log("menu toggle");
}
btnMenu.addEventListener("click", desplegarMenu);
