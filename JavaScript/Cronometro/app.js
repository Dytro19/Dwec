const start=document.getElementById("start");
const para=document.getElementById("stop");
const reset=document.getElementById("reset");
const crono=document.getElementById("cronometro");

let hours=0;
let mins=0;
let secs=0;

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
        },1000)
    }
})

para.addEventListener("click", ()=>{
    clearInterval(intervalo);
})

reset.addEventListener("click", ()=>{
    secs=0;
    mins=0;
    hours=0;
    crono.innerHTML="00:00";
})

function imprime(){
    if (hours>=1){
        crono.innerHTML=mins.toString().padStart(2,"0")+":"+secs.toString().padStart(2,"0");
    }
    else{
        crono.innerHTML=mins.toString().padStart(2,"0")+":"+secs.toString().padStart(2,"0");
    }
}