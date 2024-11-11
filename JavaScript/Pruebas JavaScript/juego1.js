let palabra="";
let letra="";
var tamano;
let q;

function comprueba_entrada(){
    //cerrar
    if (letra=="q"){
        q=true;
        
    }
    //si no introduces solo 1 letra
    else if(letra.length>=2){
        tamano=true;
    }
    else if (letra.length<1){
        var tamano=true;
        
    }
}

function resultado(){

        if (comprueba_entrada(tamano)==true){
            alert("Introduce 1 letra, sino no funciono");
            
        }

        if(comprueba_entrada(q)==true){
            console.log('Has introducido una "q", tu total de letras es:'+palabra.length+' cerrando programa...');
            false;
        }


    //final
    if (palabra.length==10){
        console.log("Has llegado al limite de caracteres, tu palabra final es: "+palabra);
        
    }

}
    
while (true){
    letra=prompt("Introduce 1 letra (Introduce q para salir)");
    comprueba_entrada();
    palabra+=letra;
    console.log(palabra);
    

        //continuar

        
    

    resultado();
}
    

