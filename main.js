const botoes = document.querySelectorAll(".botao");
const texto = document.querySelectorAll(".aba-conteudo");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){
        for(let j=0;j<botoes.length;j++){
        botoes[j].classList.remove("ativo");
        texto[j].classList.remove("ativo");
    }
    botoes[i].classList.add("ativo");
    texto[i].classList.add("ativo");
}
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-12-18T00:00:00");
let tempoAtual = new Date ();
//contadores[0].textContent = calculaTempo(tempoObjetivo1); 

//function calculaTempo(tempoObjetivo1){


//}

let tempofinal = tempoObjetivo1 - tempoAtual;
let segundos = tempoFinal/1000;
let minutos = segundos/60;
let horas = minutos/60;
let dias = horas/24;

contadores[0].textContent = dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
