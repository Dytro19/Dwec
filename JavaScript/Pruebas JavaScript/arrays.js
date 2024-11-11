function imprime(){
    console.log(fruits);
    console.log(fruits.length);
}

let fruits=["apple", "orange", "banana"]; //crea array
imprime();

fruits.push("grape"); //añade elemento a final de array
imprime();

fruits.push("watermelon","melon"); //añade varios elementos a final de array
imprime();

fruits.unshift("manzana") //añade elemento a inicio de array
imprime();

fruits.unshift("pera", "hollow") //añade varios elementos a inicio de array
imprime();

fruits.pop(); //elimina ultimo elemeto de array
imprime();

fruits.shift(); //elimina primer elemento de array
imprime();

