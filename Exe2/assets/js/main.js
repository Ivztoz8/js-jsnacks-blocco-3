// Dichiarazione variabile
let index0 = 0;
let arrays = [];

//Chiedo di inserire un numero, che chiameremo "N"
let nbr = parseInt(prompt("Inserisci un numero: "));
while(index0 < nbr){
    for (let index1 = 0; index1 < 10; index1++){
        arrays.push(Math.floor(Math.random()* 100) + 1);
    }
    console.log(arrays);
    index0++;
}