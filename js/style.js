/* fade in animation */
window.addEventListener("load", () => {
  document.querySelectorAll(".projekt").forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, index * 200);
  });
});
