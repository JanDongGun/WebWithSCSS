const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const navMobile = document.querySelector(".header__nav");
const body = document.querySelector("body");
btnHamburger.addEventListener("click", (e) => {
  e.preventDefault();
  if (header.classList.contains("open")) {
    // remove popup
    header.classList.remove("open");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");

    // NAV
    navMobile.classList.remove("fade-in");
    navMobile.classList.add("fade-out");
    body.classList.remove("noscroll");
  } else {
    // open popup
    header.classList.add("open");
    overlay.classList.add("fade-in");
    overlay.classList.remove("fade-out");

    // NAV
    navMobile.classList.add("fade-in");
    navMobile.classList.remove("fade-out");
    body.classList.add("noscroll");
  }
});
