const mobile_menu = document.querySelector(".mobile-nav");
const nav = document.querySelector(".main_nav");
const logo = document.getElementById("logo");
const ham = document.querySelector(".ham");
const ham3 = document.querySelector(".ham3");
window.onload = function () {
  ham.addEventListener("click", function () {
    mobile_menu.classList.toggle("is-active");
    nav.classList.toggle("is-active");
    logo.classList.toggle("is-active");
  });
};

function closeHamMenu() {
  mobile_menu.classList.toggle("is-active");
  nav.classList.toggle("is-active");
  logo.classList.toggle("is-active");
  ham3.classList.toggle("active");
}
