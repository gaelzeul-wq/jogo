let pontos = 0;
let auto = 0;
let auto2 = 0;

function clicou(){
    pontos++;
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
    if(pontos >= 100){
        pontos -= 100;
        auto2+=10;
        atualizar();
    }
}
function atualizar(){
    document.getElementById("pontos").innerText = pontos;
    document.getElementById("auto").innerText = auto;
    document.getElementById("auto2").innerText = auto2;
}
setInterval(function(){
    pontos += auto + auto2;
    atualizar();
},600);