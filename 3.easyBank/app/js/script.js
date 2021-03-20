const btnHamburger = document.querySelector("#btnHamburger");
btnHamburger.addEventListener("click", (e) => {
  e.preventDefault();
  btnHamburger.classList.toggle("open");
});
