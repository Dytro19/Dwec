const start=document.getElementById("start");
const para=document.getElementById("stop");
const reset=document.getElementById("reset");
const crono=document.getElementById("cronometro");

let hours=0;
let mins=0;
let secs=0;

let intervalo;
if (!intervalo){
    start.addEventListener("click", ()=>{
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
        }, 1000 )
    })
}

para.addEventListener("click", ()=>{
    clearInterval(intervalo);
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