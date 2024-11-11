function cambiafoto(){
    var imagen= document.getElementById("foto");
    
    console.log(typeof(imagen))
    console.log(imagen.nodeName)
    if (imagen.src.match("hojas")){
        imagen.src="Imagenes/espacio.jpg";
    }else{
        imagen.src="Imagenes/hojas.png";
    }
}
function cambiasize(){
    var imagen=document.getElementById("foto");
    var h=0;
    var w=0;

    w= imagen.clientWidth;
    imagen.style.width=w*0.8;

    h= imagen.clientHeight;
    imagen.style.height=h*0.8;
}