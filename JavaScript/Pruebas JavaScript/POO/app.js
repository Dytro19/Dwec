let nivel;
//Tus pokemon
let equipo=[];

//Los pokemon de tu rival
let rivales=[];

//Ataques de todos los pokemon porque no tengo base de datos
const RAYO=90*nivel/50;
const LLAMARADA=110*nivel/50;

const ATAQUES=[RAYO, LLAMARADA];

class Pokemons{
    
    constructor(nombre, nivel) {
        this.nombre=nombre;
        this.nivel=nivel;
        this.hp=100*nivel/50;
        console.log("se ha creado un pokemon de nombre: "+this.nombre+" con el nivel "+this.nivel+" y tiene "+this.hp+" puntos de vida");
    }

    ataca(pokemon, ataque){
        if (pokemon.hp>0){
            pokemon.hp-=ataque;
            console.log(this.nombre+" le ha quitado "+ataque+" hp a "+pokemon.nombre);
            if(pokemon.hp<=0){
                this.debilitar()
            }
        }
    }

    debilitar(){
        //Este método se sobrescribe en las clases
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

let pikachu = new Equipo("Pikachu", 5);
let reshiram = new Rivales("Reshiram", 100);

pikachu.ataca(reshiram, ATAQUES[1]);
console.log(reshiram.hp);
pikachu.ataca(reshiram, 5);
console.log(reshiram.hp);

console.log(rivales);
console.log(equipo);