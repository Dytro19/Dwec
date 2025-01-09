const imagen=document.getElementById("imagen");
X=0;
Y=0;

const goku={
    id: imagen,
    tp(){
        document.getElementById("container").addEventListener("click",(e)=>{
            X=e.clientX;
            Y=e.clientY;
        
            goku.id.style.left=X+"px";
            goku.id.style.top=Y+"px";
        })
    }
}

goku.tp();