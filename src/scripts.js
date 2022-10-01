document.addEventListener("DOMContentLoaded", init);

function init() {
  const root = document.querySelector(".split-viewer");
  const sections = document.querySelectorAll(".split-viewer__section");

  const clearClass = () => {
    sections.forEach((section) => {
        section.classList.remove("split-viewer__section_active");
    })
}

  sections.forEach((section) => {
      section.addEventListener("mouseenter", () => {
          clearClass();
          section.classList.add("split-viewer__section_active");
      })
  })

  root.addEventListener("mouseleave", clearClass);
}
