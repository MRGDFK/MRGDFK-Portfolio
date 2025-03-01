/**
 * PRELOADER
 */

window.addEventListener("DOMContentLoaded", function () {
  const preloader = document.querySelector("[data-preloader]");
  if (preloader) {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
    document.body.style.overflowY = "auto"; // Explicitly enable scrolling
  }
});
