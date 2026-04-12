let pontos = 0;
let auto = 0;
let auto2 = 0;
let auto3 = 0;
let auto4 = 0;
let auto5 = 0;

let autoQtd = 0;
let auto2Qtd = 0;
let auto3Qtd = 0;
let auto4Qtd = 0;
let auto5Qtd = 0;   

const LIMITE0 = 1;
const LIMITE01 =100;
const LIMITE2 =1000;
const LIMITE3 =10000;
const LIMITE4 =100000;
const LIMITE5 =1000000;
const LIMITE6 =10000000;
const LIMITE7 =100000000;
const LIMITE8 =1000000000;
const LIMITE9 =10000000000;
const LIMITE10 =100000000000;
const LIMITE11 =1000000000000;

let venceu0 = false;
let venceu = false;
let venceu2 = false;
let venceu3 = false;
let venceu4 = false;
let venceu5 = false;
let venceu6 = false;
let venceu7 = false;
let venceu8 = false;
let venceu9 = false;
let venceu10 = false;
let venceu11 = false;


function formatarNumero(num) {
    if (num >= 1000000000000) {
        return (num / 1000000000000).toFixed(1).replace(".0", "") + 'T';
    } else if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(".0", "") + 'B';
    } else if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(".0", "") + 'M';
    }   else if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(".0", "") + 'K';
    } else {
        return num;
    
    }
}

function clicou(){
    pontos+=1;
    atualizar();
}

function comprarAuto(){
    if(pontos >= 25){
        pontos -= 25;
        auto+=2;
        autoQtd+=1;
        atualizar();
    }
}

function comprarAuto2(){
    if(pontos >= 1000){
        pontos -= 1000;
        auto2+=10;
        auto2Qtd+=1;
        atualizar();
    }
}

function comprarAuto3(){
    if(pontos >= 10000){
        pontos -= 10000;
        auto3+=1000;
        auto3Qtd+=1;
        atualizar();
    }
}

function comprarAuto4(){
    if(pontos >= 1000000){
        pontos -= 1000000;
        auto4+=100000;
        auto4Qtd+=1;
        atualizar();
    }
}

function comprarAuto5(){
    if(pontos >= 1000000000){
        pontos -= 1000000000;
        auto5+=1000000;
        auto5Qtd+=1;
        atualizar();
    }
}

function atualizar(){
    document.getElementById("pontos").innerText = formatarNumero(pontos);
    document.getElementById("auto").innerText = formatarNumero(autoQtd);
    document.getElementById("auto2").innerText = formatarNumero(auto2Qtd);
    document.getElementById("auto3").innerText = formatarNumero(auto3Qtd);
    document.getElementById("auto4").innerText = formatarNumero(auto4Qtd);
    document.getElementById("auto5").innerText = formatarNumero(auto5Qtd);

    if(pontos >= LIMITE0 && !venceu0){
        venceu0 = true;
        alert("Parabéns pela conquisa de 1 Click!");
    }

    if(pontos >= LIMITE01 && !venceu){
        venceu = true;
        alert("Parabéns pela conquisa de 100 Clicks!");
    }

    if(pontos >= LIMITE2 && !venceu2){  
        venceu2 = true;
        alert("Parabéns pela conquisa de 1.000 Clicks!");
    }

    if(pontos >= LIMITE3 && !venceu3){
        venceu3 = true;
        alert("Parabéns pela conquisa de 10.000 Clicks!");
    }

    if(pontos >= LIMITE4 && !venceu4){
        venceu4 = true;
        alert("Parabéns pela conquisa de 100.000 Clicks!");
    } 

    if(pontos >= LIMITE5 && !venceu5){
        venceu5 = true;
        alert("Parabéns pela conquisa de 1.000.000 Clicks!");
    }

    if(pontos >= LIMITE6 && !venceu6){
        venceu6  = true;
        alert("Parabéns pela conquisa de 10.000.000 Clicks!");
    } 

    if(pontos >= LIMITE7 && !venceu7){
        venceu7 = true;
        alert("Parabéns pela conquisa de 100.000.000 Clicks!");
    }

    if(pontos >= LIMITE8 && !venceu8){
        venceu8 = true;
        alert("Parabéns pela conquisa de 1.000.000.000 Clicks!");
    }

    if(pontos >= LIMITE9 && !venceu9){
        venceu9  = true;
        alert("Parabéns pela conquisa de 10.000.000.000 Clicks!");
    }

    if(pontos >= LIMITE10 && !venceu10){
        venceu10 = true;
        alert("Parabéns pela conquisa de 100.000.000.000 Clicks!");
    }

    if(pontos >= LIMITE11 && !venceu11){
        venceu11 = true;
        alert("Parabéns, você venceu o jogo!");
    }
}

setInterval(function(){
    pontos += auto + auto2 + auto3 + auto4 + auto5;
    atualizar();
},1000);