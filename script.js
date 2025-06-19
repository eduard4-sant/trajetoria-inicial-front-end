const botao = document.querySelector(".botao");
const container = document.querySelector(".container");
const mensagem = document.querySelector(".mensagem");

function somar(){
    let total = parseInt(container.innerText);

    if(total < 10){
        total += 1;
        container.innerText = total;
        mensagem.innerText = "";
    }else{
        const aviso = "Limite máximo atingido!";
        mensagem.innerText = aviso;
        console.log(aviso);
    }
}

if(botao){
    botao.addEventListener("click", somar);
}
else{
    console.log("Botão não encontrado");
}