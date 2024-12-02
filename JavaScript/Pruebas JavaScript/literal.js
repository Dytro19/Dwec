const picachu={
    color:"amarillo",
    ataque(){
        alert("Cola Férrea");
    },
    soy(){
        alert(picachu.color);
    }
}

document.getElementById("boton").addEventListener("click", ()=>{
    picachu.ataque();
});
document.getElementById("boton2").addEventListener("click",()=>{
    picachu.soy();
    picachu.color="naranja";
    picachu.soy();
})