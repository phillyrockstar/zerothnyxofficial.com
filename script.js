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

portalButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.panel;
    const panel = document.getElementById(id + "-panel");

    panels.forEach((p) => p.classList.remove("active"));
    panel.classList.add("active");
  });
});

/* close panel when clicking outside */
panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    if (e.target === panel) {
      panel.classList.remove("active");
    }
  });
});