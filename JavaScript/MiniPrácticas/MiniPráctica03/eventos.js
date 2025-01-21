const posX=0
const posY=0
document.addEventListener("keydown", (event)=>{
    console.log(event.key)
    console.log(event);
    uno=document.getElementById("uno");

    switch(event.key){
        case "ArrowRight":
        case "d":
        case "D":
            posX+=10;
            uno.style.marginLeft=posX+"px";
            break;
        case "ArrowDown":
        case "s":
        case "S":
            posY+=10;
            uno.style.marginTop=posY+"px";
            break;
        case "ArrowLeft":
        case "a":
        case "A":
            posX-=10;
            uno.style.marginLeft=posX+"px";
            break;
        case "ArrowUp":
        case "w":
        case "W":
            posY-=10;
            uno.style.marginTop=posY+"px";
            break;
    }
});