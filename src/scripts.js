const sections = document.querySelectorAll(".split-viewer__section");

function clearClass() {
    sections.forEach((section) => {
        section.classList.remove("split-viewer__section_active")
    })
}

sections.forEach((section) =>{
    section.addEventListener("mouseenter", function() {
        clearClass();
        section.classList.add("split-viewer__section_active")
    })
})


