function repartir(){
    aleatorio2=Math.floor(Math.random()*12+1);
    aleatorio=document.getElementById("aleatorio");
    aleatorio.innerHTML=aleatorio2;

    bot2=Math.floor(Math.random()*12+1);
    bot=document.getElementById("bot");
    bot.innerHTML=bot2;

    resultado=document.getElementById("result");

    if(aleatorio2>=bot2){
        resultado.innerHTML="Ganas";
    }
    else if(aleatorio2==bot2){
        resultado.innerHTML="Empate";
    }
    else{
        resultado.innerHTML="Pierdes";
    }
}