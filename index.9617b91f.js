function init(){const e=document.querySelector(".split-viewer"),t=document.querySelectorAll(".split-viewer__section"),i=()=>{t.forEach((e=>{e.classList.remove("split-viewer__section_active")}))};t.forEach((e=>{e.addEventListener("mouseenter",(()=>{i(),e.classList.add("split-viewer__section_active")}))})),e.addEventListener("mouseleave",i)}document.addEventListener("DOMContentLoaded",init);
//# sourceMappingURL=index.9617b91f.js.map