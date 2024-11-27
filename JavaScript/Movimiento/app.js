const sprite=document.getElementById("sprite");
const X=sprite.style.marginLeft;
const Y=sprite.style.margintop;

document.getElementById("iniciar").addEventListener("click",()=>{
    setInterval(()=>{
        sprite.style.display="flex";
        X+=5+"px";
        Y+=5+"px";
    },50)
})

