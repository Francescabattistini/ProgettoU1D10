/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}
console.log(pets);
/* pets.push("parrots");  */ // l'ho aggiunto per giocare un pochetto e usare un'altra lettera dell'alfabeto.

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();

console.log("ordine alfabetico dei pets", pets);

const index = 3;
/* pets.splice(index, 1); */ //poi ho tolto "parrots" dall'alfabeto
/* 
console.log("ho tolto Parrots", pets); */
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log("così è invertito l'ordine dell'Arrey pets", pets); //avremmo potuto anche  usare il cilco  un for con i--

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const firstPet = pets.shift();
pets.push(firstPet);
console.log(" ho spostato il primo animale all'ultimo posto ", pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
//**************************************************************************//
//
const licensePlate = ["AB1234BC", "AB567BC", "AB890BC"];
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = licensePlate[i];
}

console.log("Qui ho aggiunto le targhe alle cars:", cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newCar = {
  brand: "Fiat",
  model: "multipla",
  color: "bluenavy",
  trims: ["family", "brutta", "seiPosti"],
  licensePlate: "CD123EF",
};

cars.push(newCar);
console.log("ho aggiunto un nuovo modello di cars", cars);
/* rimuovere i trims: */
/* for (let i = 0; i < cars.length; i++) {
  delete cars[i].trims;
}
console.log("senza trims:",cars); */

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

cars.forEach(function (car) {
  justTrims.push(car.trims[0]);
});

console.log("solo i primi elementi di ", justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
let i = 0;
while (i < cars.length) {
  const firstLetter = cars[i].color.charAt(0).toLowerCase();
  if (firstLetter === "b") {
    console.log("Fizz", cars[i].color);
  } else {
    console.log("Buzz", cars[i].color);
  }
  i++;
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const positionsArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  const character = charactersArray[i];

  switch (character) {
    case "a":
      positionsArray.push(alphabet.indexOf(character) + 1);
      break;
    case "b":
      positionsArray.push(alphabet.indexOf(character) + 1);
      break;
    case "c":
      positionsArray.push(alphabet.indexOf(character) + 1);
      break;
    // continua con tutti gli altri caratteri dell'alfabeto
    default:
      positionsArray.push(-1); // carattere non trovato
      break;
  }
}

console.log(positionsArray);
