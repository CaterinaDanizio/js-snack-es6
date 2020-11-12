// CONSEGNA:
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// Array squadre

const footballTeam =  [
  {
   'nome': "Milan",
   'punti': 0,
   'falli': 0
 },

  {
   'nome': "Inter",
   'punti': 0,
   'falli': 0
 },

  {
   'nome': "Juventus",
   'punti': 0,
   'falli': 0
  },

  {
   'nome': "Manchester United",
   'punti': 0,
   'falli': 0
 },

 {
  'nome': "Real Madrid",
  'punti': 0,
  'falli': 0
  }
]

console.log(footballTeam);

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti

// Variante con funzione
footballTeam.forEach((element) => {
  element.punti = Math.floor(Math.random() * (10-1) + 1);
  element.falli = Math.floor(Math.random() * (10-1) + 1);
});

  console.log("L'array aggiornato è ", footballTeam);
