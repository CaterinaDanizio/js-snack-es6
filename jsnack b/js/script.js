// CONSEGNA:
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

// Array di biciclette

var biciclette = [
  {
  'name': "Warwind200",
  'weight': 7
},

  {
  'name': "Denver650",
  'weight': 6
},

  {
  'name': "SpeedyFlet",
  'weight': 8
},

{
  'name': "Tecno157",
  'weight': 5
},

{
  'name': "SuperSlim",
  'weight': 3
}
]

console.log(biciclette);

var biciLight = biciclette[0];

for (var i = 0; i < biciclette.length; i++){
  if (biciLight.weight > biciclette[i].weight) {
    biciLight = biciclette[i];
  }
}
console.log(biciLight);
