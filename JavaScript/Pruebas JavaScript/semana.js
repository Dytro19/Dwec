function Change(){
    var cambio=document.getElementById("1");
    cambio.innerHTML="Mercurio";
    cambio.style.color="#68696d";

    cambio=document.getElementById("2");
    cambio.innerHTML="Venus";
    cambio.style.color="#d3a567";

    cambio=document.getElementById("3");
    cambio.innerHTML="Tierra";
    cambio.style.color="#6b93d6";

    cambio=document.getElementById("4");
    cambio.innerHTML="Marte";
    cambio.style.color="#451804";

    cambio=document.getElementById("5");
    cambio.innerHTML="Júpiter";
    cambio.style.color="#ddb47e";

    cambio=document.getElementById("6");
    cambio.innerHTML="Saturno";
    cambio.style.color="#c4b08b";

    cambio=document.getElementById("7");
    cambio.innerHTML="Neptuno";
    cambio.style.color="#1f2255";

    var aparecer=document.getElementById("foto1");
    aparecer.style.display="block";

    aparecer=document.getElementById("foto2");
    aparecer.style.display="block";

    aparecer=document.getElementById("foto3");
    aparecer.style.display="block";

    aparecer=document.getElementById("foto4");
    aparecer.style.display="block";

    aparecer=document.getElementById("foto5");
    aparecer.style.display="block";

    aparecer=document.getElementById("foto6");
    aparecer.style.display="block";

    aparecer=document.getElementById("foto7");
    aparecer.style.display="block";
}

function Reset(){
    location.reload();
}
