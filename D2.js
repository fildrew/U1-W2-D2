/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
const num1 = 25;
const num2 = 40;

let largest;

if (num1 > num2) {
  largest = num1;
} else if (num2 > num1) {
  largest = num2;
} else {
  largest = "Both numbers are equal";
}
console.log("The largest number is:", largest);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let myInteger = 3;

if (myInteger !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let n = 50;
if (n % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
const firstNumber = 3;
const secondNumber = 5;
let result;
if (firstNumber === 8 || secondNumber === 8 || firstNumber + secondNumber === 8 || firstNumber - secondNumber === 8) {
  result = true;
} else {
  result = false;
}
console.log("Condition met:", result);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 60;
let ShippingCost = 10;
let finalTotal;
if (totalShoppingCart > 50) {
  finalTotal = totalShoppingCart;
} else {
  finalTotal = totalShoppingCart + ShippingCost;
}
console.log("Total to be charged:", totalShoppingCart);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
const totalShoppingCart1 = 60;
const discountRate = 0.2;
const discountedTotal = totalShoppingCart1 * (1 - discountRate);
const shippingCost = 10;
let finalTotal1;
if (discountedTotal > 50) {
  finalTotal = discountedTotal;
  console.log("Free Shipping!");
} else {
  finalTotal1 = discountedTotal + shippingCost;
  console.log("Additional cost for shipping: " + shippingCost);
}

console.log("The total amount to be paid is: " + finalTotal1);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let a = 1;
let b = 3;
let c = 8;

let highest, middle, lowest;

if (a >= b && a >= c) {
  highest = a;
  middle = b >= c ? b : c;
  lowest = b < c ? b : c;
} else if (b >= a && b >= c) {
  highest = b;
  middle = a >= c ? a : c;
  lowest = a < c ? a : c;
} else {
  highest = c;
  middle = a >= b ? a : b;
  lowest = a < b ? a : b;
}
console.log("Sorted values (highest to lowest):", highest, middle, lowest);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
const value = 35;
let isNumber;
if (typeof value === "number") {
  isNumber = true;
} else {
  isNumber = false;
}
console.log("Is the value a number:", isNumber);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
const numberToCheck = 8;
let outcome;
if (numberToCheck % 2 === 0) {
  outcome = "even";
} else {
  outocme = "odd";
}

console.log("The number is:", outcome);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
let val = 7;
if (val < 5) {
  console.log("Meno di 10");
} else if (val < 10) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
const mio = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
  city: "Toronto",
};

delete mio.lastName;
console.log(mio);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
const io = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
  city: "Toronto",
};

io.skills.pop("css");
console.log(io);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const numbers = [];
let i = 1;
if (i <= 10) {
  numbers.push(i);
}

console.log(numbers);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray.pop();
myArray.push(100);
console.log(myArray);
