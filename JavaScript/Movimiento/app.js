//recogida de sprite
const sprite=document.getElementById("sprite");

//movimiento
let X = 0;
let Y = 0;

//codiciones rebotes
let condicionX = false;
let condicionY = false;

//borde de ventana
ventanaX = window.innerWidth - 50;
ventanaY = window.innerHeight - 50;

window.addEventListener("resize",()=>{
    ventanaX = window.innerWidth - 50;
    ventanaY = window.innerHeight - 50;
})

//evita la aceleracion
let intervalo;

//control de tiempo al pulsar 
window.addEventListener("load",()=>{
    if (!intervalo){
        intervalo = setInterval(mover,25)
    }
})

//funcion para mover
function mover(){
    if (condicionX == false && condicionY == false) {
        X += 5;
        Y += 5;

        sprite.style.marginLeft = X + "px";
        sprite.style.marginTop = Y + "px";

        borde();
    }
    if (condicionX == true && condicionY == false) {
        X -= 5;
        Y += 5;

        sprite.style.marginLeft = X + "px";
        sprite.style.marginTop = Y + "px";

        borde();
    }

    if(condicionX == false && condicionY == true) {
        X += 5;
        Y -= 5;

        sprite.style.marginLeft = X + "px";
        sprite.style.marginTop = Y + "px";

        borde();
    }

    if (condicionX == true && condicionY == true) {
        X -= 5;
        Y -= 5;

        sprite.style.marginLeft = X + "px";
        sprite.style.marginTop = Y + "px";

        borde();
    }
}  

//funcion detectar borde de ventana
function borde(){
    if (ventanaX <= X){
        condicionX = true;
    }
    if (0 >= X){
        condicionX = false;
    } 

    if (ventanaY <= Y){
        condicionY = true;
    }
    if (0 >= Y){
        condicionY = false;
    }
}

