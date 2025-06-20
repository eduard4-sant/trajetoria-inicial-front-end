const img1 = document.querySelectorAll(".aulinha img");
const destaque = document.querySelector("#destaque");

img1.forEach((item) => {
    item.addEventListener("click", () => {
        destaque.src = item.src;
    })
})


function imagens(i){
    i.src
}

function vasculhar(item){
    item.addEventListener("click", imagens)
}




img1.forEach(vasculhar);