/* fade in animation */
window.addEventListener("load", () => {
  document.querySelectorAll(".projekt").forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, index * 200);
  });
});

/* header forsvinder ved scroll */
let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scroller ned → skjul header
    header.style.top = "-150px";
  } else {
    // Scroller op → vis header
    header.style.top = "0";
  }
  lastScrollY = window.scrollY;
});
