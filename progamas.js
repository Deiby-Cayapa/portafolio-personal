document.getElementById("#cerrar");
document.getElementById("#abrir");
document.getElementById("#menu");

abrir.addEventListener("click", () =>{
    menu.classList.add("visible");
})
cerrar.addEventListener("click", () =>{
    menu.classList.remove("visible");
})
