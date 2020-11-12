// CONSEGNA
// Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
// Peso = 10
// 1B:
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

var palla = {
  'nome': "palla",
  'peso': 10
}

console.log(palla);

palla.peso = parseInt(prompt("Inserisci il peso della palla"));

console.log(palla);
