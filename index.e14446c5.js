const sections=document.querySelectorAll(".section");function clearClass(){sections.forEach((e=>{e.classList.remove("active")}))}sections.forEach((e=>{e.addEventListener("mouseenter",(function(){clearClass(),e.classList.add("active")}))}));
//# sourceMappingURL=index.e14446c5.js.map
