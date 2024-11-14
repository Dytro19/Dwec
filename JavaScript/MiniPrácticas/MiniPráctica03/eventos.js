const posX=0
const posY=0
document.addEventListener("keydown", (event)=>{
    console.log(event.key)
    console.log(event);
    uno=document.getElementById("uno");

    switch(event.key){
        case "ArrowRight":
        case "d":
            posX+=10;
            uno.style.marginLeft=posX+"px";
            break;
        case "ArrowDown":
        case "s":
            posY+=10;
            uno.style.marginTop=posY+"px";
            break;
        case "ArrowLeft":
        case "a":
            posX-=10;
            uno.style.marginLeft=posX+"px";
            break;
        case "ArrowUp":
        case "w":
            posY-=10;
            uno.style.marginTop=posY+"px";
            break;
    }
});