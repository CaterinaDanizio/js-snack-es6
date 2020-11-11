// CONSEGNA jsnack 1
//Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

// Array di partenza
var nomi = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara', 'Marta', 'Greta'];

var max = parseInt(prompt("Inserisci un numero da 0 a 7"));
var min = parseInt(prompt("Inserisci un numero maggiore del precedente ma sempre tra 0 e 7"));

// Nuovo array con i nuovi valori
var nuovoNomi = nomi.slice(max,min+1);
console.log(nuovoNomi);

// CONSEGNA jsnack 2
// dato questo array di obj iniziale:
// var arrayObj = [
//   {name: 'Poppy', type: 'tshirt', color: 'red'},
//   {name: 'Jumping', type: 'occhiali', color: 'blue'},
//   {name: 'CrissCross', type: 'scarpe', color: 'black'},
//   {name: 'Jenny', type: 'borsa', color: 'pink'},
// ];
//Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array) una nuova proprietà position che contiene una lettera casuale. Non dobbiamo modificare l’array iniziale

// Array iniziale
var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];
console.log("Il vecchio array è questo ", arrayObj);

// Copia dell'array
var newArrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

console.log("Il nuovo array è questo ", newArrayObj);

// Aggiungere la chiave "position" che ha come valore una lettera casuale
for (var key in newArrayObj) {
  newArrayObj[key].position = genLetterRand();
}

// Funzione: generazione lettera casuale
var str = "";
function genLetterRand() {
  var lettere = "abcdefghijklmnopqrstuvwxyz";
  var l = lettere.length;
  var n = 1; // lunghezza stringa
  for(var i=0; i<n; i++) {
  var str = lettere[Math.floor(Math.random()*l)];
  return str;
  }
}
