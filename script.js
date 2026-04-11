let pontos = 0;
let auto = 0;
let auto2 = 0;
let auto3 = 0;
const LIMITE =1000000000;
let venceu = false;

function clicou(){
    pontos+=1;
    atualizar();
}
function comprarAuto(){
    if(pontos >= 25){
        pontos -= 25;
        auto+=2;
        atualizar();
    }
}
function comprarAuto2(){
    if(pontos >= 1000){
        pontos -= 1000;
        auto2+=10;
        atualizar();
    }
}
function comprarAuto3(){
    if(pontos >= 10000){
        pontos -= 10000;
        auto3+=1000;
        atualizar();
    }
}
function atualizar(){
    document.getElementById("pontos").innerText = pontos;
    document.getElementById("auto").innerText = auto;
    document.getElementById("auto2").innerText = auto2;
    document.getElementById("auto3").innerText = auto3;

    if(pontos >= LIMITE && !venceu){
        venceu = true;
        alert("Parabéns, você venceu o jogo!");
    }
}
setInterval(function(){
    pontos += auto + auto2 + auto3;
    atualizar();
},1000);