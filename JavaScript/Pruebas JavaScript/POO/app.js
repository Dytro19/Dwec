
//Tus pokemon
let equipo=[];

//Los pokemon de tu rival
let rivales=[];

//Almacenamiento Pokemon
let pc=[];

class Pokemons{
    constructor(nombre, nivel) {
        this.nombre=nombre;
        this.nivel=nivel;
        this.hp=100*nivel/50;
        console.log("se ha creado un pokemon de nombre: "+this.nombre+" con el nivel "+this.nivel+" y tiene "+this.hp+" puntos de vida");
    }

    ataca(pokemon, ataque){
        this.potenciaTotal = ataque.potencia * this.nivel / 50;
        if (pokemon.hp>0){
            pokemon.hp-=this.potenciaTotal;
            console.log(this.nombre+" le ha quitado "+this.potenciaTotal+" hp a "+pokemon.nombre);
            if(pokemon.hp<=0){
                this.debilitar()
            }
        }
    }

    debilitar(){
        //Este método se sobrescribe en las clases
    }
}

class Ataques{
    constructor(nombre, potencia){
        this.nombre=nombre;
        this.potencia=potencia;
        //this.potenciaTotal=potencia*Pokemons.nivel/50;
    }
}

class Equipo extends Pokemons{
    constructor(nombre, nivel) {
        super(nombre, nivel);
        equipo.push(nombre);
    }

    debilitar(pokemon) {
        rivales.shift(pokemon);
        console.log("El pokemon enemigo ha sido debilitado")
    }
}

class Rivales extends Pokemons{
    constructor(nombre, nivel) {
        super(nombre, nivel);
        rivales.push(nombre);
    }

    debilitar(pokemon) {
        equipo.shift(pokemon);
        console.log("Tu pokemon ha sido debilitado");
    } 
}

let rayo= new Ataques("Rayo", 90);

let pikachu = new Equipo("Pikachu", 10);
let reshiram = new Rivales("Reshiram", 15);

pikachu.ataca(reshiram, rayo);
console.log(reshiram.hp);
pikachu.ataca(reshiram, rayo);
console.log(reshiram.hp);

console.log(rivales);
console.log(equipo);