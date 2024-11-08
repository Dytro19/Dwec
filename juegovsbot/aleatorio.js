
var bot;
var puntuacion=0;
var vidas=10;


//la funcion es para que se actualize cada vez que seleccionas una opcion
function botlogic(){
    //Numero random del 0 al 2, para hacer el bot
    bot = Math.floor(Math.random()*3);
 
    //Mostrar el resultado
    resultado=document.getElementById("resultado");
}

//Muestra las decisiones del player
function playerDecision(player){
    let imagen=document.getElementById("player");
    imagen.src=player;
    imagen.style.display="block";
}

//Muestra las decisiones del bot
function botDecision(bot){
    let imagen=document.getElementById("bot");
    imagen.src=bot;
    imagen.style.display="block";
}

function perdervidas(){
    switch(vidas){
        case 9:
            document.getElementById("vida10").src="Imagenes/vida_perdida.png";
        break;
        case 8:
            document.getElementById("vida9").src="Imagenes/vida_perdida.png";
        break;
        case 7:
            document.getElementById("vida8").src="Imagenes/vida_perdida.png";
        break;
        case 6:
            document.getElementById("vida7").src="Imagenes/vida_perdida.png";
        break;
        case 5:
            document.getElementById("vida6").src="Imagenes/vida_perdida.png";
        break;
        case 4:
            document.getElementById("vida5").src="Imagenes/vida_perdida.png";
        break;
        case 3:
            document.getElementById("vida4").src="Imagenes/vida_perdida.png";
        break;
        case 2:
            document.getElementById("vida3").src="Imagenes/vida_perdida.png";
        break;
        case 1:
            document.getElementById("vida2").src="Imagenes/vida_perdida.png";
        break;
        case 0:
            document.getElementById("vida1").src="Imagenes/vida_perdida.png";
        break;
        case 1:

        break;

    }
}

function reiniciarJuego() { 
    location.reload();
}

function entrada(num){
    botlogic();

    //Si es Tijera
    if (num==2){

        playerDecision("Imagenes/tijeras.png");

        if (bot==0){
            vidas-=1;
            perdervidas();

            botDecision("Imagenes/piedra.png");
        }
        else if(bot==1){
            resultado.innerHTML=puntuacion+=100;

            botDecision("Imagenes/papel.png");
        }
        else{
            resultado.innerHTML;

            botDecision("Imagenes/tijeras.png");
        }
    }

    //Si es Piedra
    else if (num==0){

        playerDecision("Imagenes/piedra.png");

        if (bot==1){
            vidas-=1;
            perdervidas();

            botDecision("Imagenes/papel.png");
        }
        else if(bot==2){
            resultado.innerHTML=puntuacion+=100;

            botDecision("Imagenes/tijeras.png");
        }
        else{
            resultado.innerHTML;

            botDecision("Imagenes/piedra.png");
        }
    }

    //Si es Papel
    else if (num==1){

        playerDecision("Imagenes/papel.png");

        if (bot==2){
            vidas-=1;
            perdervidas();

            botDecision("Imagenes/tijeras.png");
        }
        else if(bot==0){
            resultado.innerHTML=puntuacion+=100;

            botDecision("Imagenes/piedra.png");
        }
        else{
            resultado.innerHTML;

            botDecision("Imagenes/papel.png");
        }
    }
}