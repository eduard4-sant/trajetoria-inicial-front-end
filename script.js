const botao = document.querySelector(".botao");

const div = document.querySelector(".circulo");
function seguirMouse(event) {
    div.style.top = event.y + "px";
    div.style.left = event.x + "px";
}
window.addEventListener("mousemove", seguirMouse)  
