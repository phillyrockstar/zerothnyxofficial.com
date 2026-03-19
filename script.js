/*year*/ 
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
/*sections */
const sections = document.querySelectorAll(".section");

function revealSections() {
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;

    if (top < trigger) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);
/* portal */

const portalButtons = document.querySelectorAll(".portal-btn");
const panels = document.querySelectorAll(".portal-panel");

