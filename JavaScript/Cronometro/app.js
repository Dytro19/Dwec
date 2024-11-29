const start=document.getElementById("start");
const para=document.getElementById("stop");
const reset=document.getElementById("reset");
const crono=document.getElementById("cronometro");
const mult=document.getElementById("multiplicador");
const mostrarMult=document.getElementById("mostrarMult");

let hours=0;
let mins=0;
let secs=0;

let milliseconds=1000;

let intervalo;

start.addEventListener("click", ()=>{
    if (!intervalo){
        intervalo=setInterval(()=>{
            secs+=1;        
            imprime();
            
            if (secs==60){
                mins+=1;
                secs=0;
                imprime();
            }
            if (mins==60){
                hours+=1;
                mins=0;
                imprime();
            }
        }, milliseconds )
    }
})


para.addEventListener("click", ()=>{
    clearInterval(intervalo);
    intervalo=null;
})

reset.addEventListener("click", ()=>{
    secs=0;
    mins=0;
    hours=0;
    imprime();
})

function imprime(){   
    crono.innerHTML=hours.toString().padStart(2,"0")+":"+mins.toString().padStart(2,"0")+":"+secs.toString().padStart(2,"0");
}

mult.addEventListener("input", ()=>{
    milliseconds=1000/mult.value;
    mostrarMult.innerHTML=mult.value;
})