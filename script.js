let pontos = 0;
let auto = 0;
let auto2 = 0;
let auto3 = 0;
let auto4 = 0;
let auto5 = 0;
let auto6 = 0;

let autoQtd = 0;
let auto2Qtd = 0;
let auto3Qtd = 0;
let auto4Qtd = 0;
let auto5Qtd = 0; 
let auto6Qtd = 0;

let autoclicks = 0;
let preçoAuto1 = 25;
let preçoAuto2 = 1000;
let preçoAuto3 = 10000;
let preçoAuto4 = 1000000;
let preçoAuto5 = 1000000000;
let precoAuto6 = 5;
let poder7 = 1;

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
const LIMITE12 =10000000000000;
const LIMITE13 =100000000000000;
const LIMITE14 =1000000000000000;
const LIMITE15 =10000000000000000;
const LIMITE16 =100000000000000000;
const LIMITE17 =1000000000000000000;
const LIMITE18 =10000000000000000000;
const LIMITE19 =100000000000000000000;
const LIMITE20 =1000000000000000000000;
const LIMITE21 =10000000000000000000000;
const LIMITE22 =100000000000000000000000;
const LIMITE23 =1000000000000000000000000;
const LIMITE24 =10000000000000000000000000;
const LIMITE25 =100000000000000000000000000;
const LIMITE26 =1000000000000000000000000000;
const LIMITE27 =10000000000000000000000000000;
const LIMITE28 =100000000000000000000000000000;
const LIMITE29 =1000000000000000000000000000000;
const LIMITE30 =10000000000000000000000000000000;
const LIMITE31 =100000000000000000000000000000000;
const LIMITE32 =1000000000000000000000000000000000;

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
let venceu12 = false;
let venceu13 = false;
let venceu14 = false;
let venceu15 = false;
let venceu16 = false;
let venceu17 = false;
let venceu18 = false;
let venceu19 = false;
let venceu20 = false;
let venceu21 = false;
let venceu22 = false;
let venceu23 = false;   
let venceu24 = false;
let venceu25 = false;
let venceu26 = false;
let venceu27 = false;
let venceu28 = false;
let venceu29 = false;
let venceu30 = false;
let venceu31 = false;
let venceu32 = false;

function formatarNumero(num) {
    if (num >= 1000000000000000000000000000000000) {
        return (num / 1000000000000000000000000000000000).toFixed(1).replace(".0", "") + 'DEC';
    } else if (num >= 1000000000000000000000000000000) {
        return (num / 1000000000000000000000000000000).toFixed(1).replace(".0", "") + 'NON';
    } else if (num >= 1000000000000000000000000000) {
        return (num / 1000000000000000000000000000).toFixed(1).replace(".0", "") + 'OCT';
    } else if (num >= 1000000000000000000000000) {
        return (num / 1000000000000000000000000).toFixed(1).replace(".0", "") + 'SEPT';
    } else if (num >= 1000000000000000000000) {
        return (num / 1000000000000000000000).toFixed(1).replace(".0", "") + 'SEX';
    } else if (num >= 1000000000000000000) {
        return (num / 1000000000000000000).toFixed(1).replace(".0", "") + 'QUIN';
    } else if (num >= 1000000000000000) {
        return (num / 1000000000000000).toFixed(1).replace(".0", "") + 'QUA';
    } else if (num >= 1000000000000) {
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
    pontos+= poder7;
    atualizar();
}

function comprarAuto(){
    if(pontos >= preçoAuto1){
        pontos -= preçoAuto1;
        auto+=2;
        preçoAuto1 += 5;
        autoQtd+=1;
        atualizar();
    }
}

function comprarAuto2(){
    if(pontos >= preçoAuto2){
        pontos -= preçoAuto2;
        auto2+=10;
        preçoAuto2 += 250;
        auto2Qtd+=1;
        atualizar();
    }
}

function comprarAuto3(){
    if(pontos >= preçoAuto3){
        pontos -= preçoAuto3;
        auto3+=1000;
        preçoAuto3 += 2500;
        auto3Qtd+=1;
        atualizar();
    }
}

function comprarAuto4(){
    if(pontos >= preçoAuto4){
        pontos -= preçoAuto4;
        auto4+=100000;
        preçoAuto4 += 250000;
        auto4Qtd+=1;
        atualizar();
    }
}

function comprarAuto5(){
    if(pontos >= preçoAuto5){
        pontos -= preçoAuto5;
        auto5+=1000000;
        preçoAuto5 += 2500000;
        auto5Qtd+=1;
        atualizar();
    }
}

function comprarclick6(){
    if(pontos >= precoAuto6){
        pontos -= precoAuto6;
        poder7 = Math.floor(poder7) * 2;
        precoAuto6 = Math.floor(precoAuto6) * 3;
        auto6Qtd+=1;
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
    document.getElementById("auto6").innerText = formatarNumero(auto6Qtd);
      document.getElementById("autoclicks").innerText = formatarNumero(auto + auto2 + auto3 + auto4 + auto5);
    
    document.getElementById("preçoAuto1").innerText = (preçoAuto1);
    document.getElementById("preçoAuto2").innerText = (preçoAuto2);
    document.getElementById("preçoAuto3").innerText = (preçoAuto3);
    document.getElementById("preçoAuto4").innerText = (preçoAuto4);
    document.getElementById("preçoAuto5").innerText = (preçoAuto5);
    document.getElementById("precoAuto6").innerText = (precoAuto6);
    document.getElementById("poder7").innerText = (poder7);



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

    if(pontos >= LIMITE12 && !venceu12){
        venceu12 = true;
        alert("Parabéns pela conquisa de 100.000.000.000.000 Clicks!");
    }

        if(pontos >= LIMITE13 && !venceu13){
        venceu13 = true;
        alert("Parabéns pela conquisa de 1.000.000.000.000.000 Clicks!");
    }

        if(pontos >= LIMITE14 && !venceu14){
        venceu14 = true;
        alert("Parabéns pela conquisa de 10.000.000.000.000.000 Clicks!");
    }

        if(pontos >= LIMITE15 && !venceu15){
        venceu15 = true;
        alert("Parabéns pela conquisa de 100.000.000.000.000.000 Clicks!");
    }

    if(pontos >= LIMITE16 && !venceu16){
        venceu16 = true;
        alert("Parabéns pela conquisa de 1.000.000.000.000.000.000 Clicks!");
    }

        if(pontos >= LIMITE17 && !venceu17){
        venceu17 = true;
        alert("Parabéns pela conquisa de 10.000.000.000.000.000.000 Clicks!");
    }

        if(pontos >= LIMITE18 && !venceu18){
        venceu18 = true;
        alert("Parabéns pela conquisa de 100.000.000.000.000.000.000 Clicks!");
    }

    if(pontos >= LIMITE19 && !venceu19){
        venceu19 = true;
        alert("Parabéns pela conquisa de 1.000.000.000.000.000.000.000 Clicks!");
    }   

    if(pontos >= LIMITE20 && !venceu20){    
        venceu20 = true;
        alert("Parabéns pela conquisa de 10.000.000.000.000.000.000.000 Clicks!");
    }

        if(pontos >= LIMITE21 && !venceu21){
        venceu21 = true;
        alert("Parabéns pela conquisa de 100.000.000.000.000.000.000.000 Clicks!");
    }

        if(pontos >= LIMITE22 && !venceu22){
        venceu22 = true;
        alert("Parabéns pela conquisa de 1.000.000.000.000.000.000.000.000 Clicks!");
    }

    if(pontos >= LIMITE23 && !venceu23){
        venceu23 = true;
        alert("Parabéns pela conquisa de 10.000.000.000.000.000.000.000.000 Clicks!");
    }

        if(pontos >= LIMITE24 && !venceu24){
        venceu24 = true;
        alert("Parabéns pela conquisa de 100.000.000.000.000.000.000.000.000 Clicks!");
    }

    if(pontos >= LIMITE25 && !venceu25){
        venceu25 = true;
        alert("Parabéns pela conquisa de 1.000.000.000.000.000.000.000.000 Clicks!");
    }   

    if(pontos >= LIMITE26 && !venceu26){    
        venceu26 = true;
        alert("Parabéns pela conquisa de 10.000.000.000.000.000.000.000.000 Clicks!");
    }

        if(pontos >= LIMITE27 && !venceu27){
        venceu27 = true;
        alert("Parabéns pela conquisa de 100.000.000.000.000.000.000.000.000 Clicks!");
    }

    if(pontos >= LIMITE28 && !venceu28){
        venceu28 = true;
        alert("Parabéns pela conquisa de 1.000.000.000.000.000.000.000.000 Clicks!");
    }

    if(pontos >= LIMITE29 && !venceu29){
        venceu29 = true;
        alert("Parabéns pela conquisa de 10.000.000.000.000.000.000.000.000 Clicks!");
    }

        if(pontos >= LIMITE30 && !venceu30){
        venceu30 = true;
        alert("Parabéns pela conquisa de 100.000.000.000.000.000.000.000.000 Clicks!");
    }

        if(pontos >= LIMITE31 && !venceu31){
        venceu31 = true;
        alert("Parabéns pela conquisa de 1.000.000.000.000.000.000.000.000 Clicks!");
    }

        if(pontos >= LIMITE32 && !venceu32){
        venceu32 = true;
        alert("Parabéns pela conquisa de 10.000.000.000.000.000.000.000.000 Clicks!");
    }

}

setInterval(function(){
    pontos += auto + auto2 + auto3 + auto4 + auto5;
   atualizar();
},1000);

/////CONEMETRO/////
let tempo = 0;

setInterval(function(){
    tempo++;
    let horas = Math.floor(tempo / 3600);
    let minutos = Math.floor((tempo % 3600) / 60);
    let segundos = tempo % 60;
    document.getElementById("tempo").textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}, 1000);  
/////CONEMETRO/////