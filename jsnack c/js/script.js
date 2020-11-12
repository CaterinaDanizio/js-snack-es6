// CONSEGNA:
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// Array squadre

var footballTeam =  [
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


for (var key in footballTeam) {
  footballTeam[key].punti = Math.floor(Math.random() * 10 +1);
  footballTeam[key].falli = Math.floor(Math.random() * 10 +1);
}

console.log(footballTeam);

// Variante con funzione
for (var i = 0; i < footballTeam.length; i++) {
  footballTeam[i].punti = generaNumero(1,10);
  footballTeam[i].falli = generaNumero(1,10);
  console.log(footballTeam[i]);
}

// Funzioni math random
function generaNumero(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Classifica squadre

footballTeam.sort(function(a,b) {
  return b.punti - a.punti;
});
console.log("Classifica aggiornata:" , footballTeam);
