// Dichiarazione variabili
let listaInvitatiBG = [
    "Jay Gatsby",
    "Gatsby",
    "Jay",   
    "Nick Carraway", 
    "Tom Buchanan", 
    "Daisy Buchanan", 
    "Jordan Baker",
    "George Wilson",
    "Mr. McKee",
    "Mrs. McKee",
    "Walter Chase",
    "Cops",
    "Cop"];
//console.log(listaInvitatiBG);
let i = 0;

// Richiesta di 10 numeri e poi somma e sviluppa l'output in HTML
let nomInvitato = prompt("Salve, il suo nome prego: ");
while (i < listaInvitatiBG.length){    
   var namechecked = listaInvitatiBG.indexOf(nomInvitato);
    console.log(namechecked);
    i++;
}
if (namechecked > -1 && namechecked !== 0 && namechecked !== 1 && namechecked !== 2 && namechecked !== 12 && namechecked !== 13){
    alert(`Buonasera ${(nomInvitato)}, prego entri pure. La festa è iniziata da poco.`);
}
else if (namechecked === 0 || namechecked == 1 || namechecked == 2){
    alert(`Oh Signore non l'avevo riconosciuta. Si goda la festa.`);
}
else if (namechecked === 12 || namechecked === 13){
    alert(`Salve, il Signor Gatsby mi aveva avvertito del vostro arrivo.
    Lui stesso si è premurato di chiedervi la massima discrezione come il vostro dipartimento sa mantenere.
    C'è gente di un certo livello questa sera. Per il resto; 
    Godetevi la festa.`);
}
else{
    alert("Mi dispiace davvero ma il suo nome non compare sulla lista. ");
}
  