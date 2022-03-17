// Dichiarazione variabili
let sumNum = 0;
let i= 0;
let sumOutpTot = document.getElementById("outPutTot"); 
let dispSum = 0; 
let numInp = 0;

// Richiesta di 10 numeri e poi somma e sviluppa l'output in HTML
while (i < 5){
    numInp = parseInt(prompt("Inserisci un numero: "));
    dispSum = sumNum += numInp;
    console.log()
    i++;
}
sumOutpTot.innerHTML = `<div class="col"> Le somma dei 5 numeri è: ${(sumNum)}</div>`;

  

