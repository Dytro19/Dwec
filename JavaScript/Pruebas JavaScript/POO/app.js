
let nivel=5;
let hp=100*nivel/50;
let nombre;

let equipo=[];
let rivales=[];

class Pokemons{
    
    constructor(nombre, nivel, hp) {
        this.nombre=nombre;
        this.nivel=nivel;
        this.hp=hp;
        console.log("se ha creado un pokemon de nombre: "+this.nombre+" con el nivel "+this.nivel+" y tiene "+hp+" puntos de vida");
    }

    ataca(pokemon, daño){
        if (pokemon.hp>0){
            pokemon.hp-=daño
            console.log("se ha restado "+daño+" al pokemon rival "+pokemon.nombre);
            if(pokemon.hp<=0){
                
            }
        }
    }
}

class Equipo extends Pokemons{
    constructor(nombre, nivel) {
        super(nombre, nivel, hp);
        equipo.push(nombre);
    }
}

class Rivales extends Pokemons{
    constructor(nombre, nivel) {
        super(nombre, nivel, hp);
        rivales.push(nombre);
    }
}

let pikachu = new Equipo("Pikachu", 5);
let reshiram = new Rivales("Reshiram", 5);


pikachu.ataca(reshiram, 5);
console.log(reshiram.hp);

console.log(rivales);
console.log(equipo);

