const sections = document.querySelectorAll(".section");

function clearClass() {
    sections.forEach((section) => {
        section.classList.remove("active")
    })
}

sections.forEach((section) =>{
    section.addEventListener("mouseenter", function() {
        clearClass();
        section.classList.add("active")
    })
})
