function imprime(){
    var parrafo=document.getElementById("parrafo");
    let separa=juegos.join(", ")
    parrafo.innerHTML=separa;
}

var juegos=["Valorant", "CS2", "ARK", "Rust"];

function añadir_final(){
    let añade=document.getElementById("input").value;
    juegos.push(añade);
    imprime();
}

function añadir_principio(){
    let añade=document.getElementById("input").value;
    juegos.unshift(añade);
    imprime();
}

function quitar_principio(){
    juegos.shift();
    imprime();
}

function quitar_final(){
    juegos.pop()
    imprime();
}
function ordena(){
    juegos.sort();
    imprime();
}