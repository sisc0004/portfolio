document.addEventListener("DOMContentLoaded", () => {
  const enterButton = document.querySelector(".enter-button");
  const landing = document.querySelector(".landing");
  const mainContent = document.querySelector("main.forside");
  const footer = document.querySelector(".footer");
  const video = document.getElementById("introVideo");
  const header = document.querySelector("header");

  enterButton.addEventListener("click", () => {
    landing.classList.add("hidden");
    mainContent.classList.remove("hidden");
    footer.classList.remove("hidden");
    header.classList.remove("hidden");

    // Afspil video med lyd efter brugerinteraktion
    video.muted = false;
    video.play();
  });
});
