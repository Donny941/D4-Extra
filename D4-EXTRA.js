// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
  let randomNum = [];

  for (let i = 0; i < n; i++) {
    randomNum.push(Math.floor(Math.random() * 11));
  }

  return randomNum;
};
let randomized = giveMeRandom(10);

console.log(randomized);

let sumEven = 0;

const checkArray = function (ranNum) {
  for (let i = 0; i < ranNum.length; i++) {
    const num = ranNum[i];
    if (num > 5) {
      console.log(`${num} is higher than 5!`);
    } else if (num < 5) {
      console.log(`${num} is lower than 5!`);
    }

    if (num % 2 === 0) {
      sumEven += num;
    }
  }
};

let checking = checkArray(randomized);

console.log(`The sum of even numbers is:${sumEven}`);

console.log(`%===================================%`);
/* EXTRA 2
Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
  {
    id: 1,
    name: "iPhone 15",
    price: 899.99,
    quantity: 1,
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 129.5,
    quantity: 2,
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    price: 89.99,
    quantity: 1,
  },
  {
    id: 4,
    name: "Coffee Mug",
    price: 12.99,
    quantity: 3,
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: 45.0,
    quantity: 1,
  },
  {
    id: 6,
    name: "USB Cable",
    price: 8.99,
    quantity: 4,
  },
];

console.log(shoppingCart);

let total = 0;

const shoppingCartTotal = function () {
  for (let i = 0; i < shoppingCart.length; i++) {
    let product = shoppingCart[i];

    total += product.price * product.quantity;
  }
  return total;
};

shoppingCartTotal();

console.log(`Your cart Total is: ${total}$`);
console.log(`%===================================%`);
/* EXTRA 3
Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const addToShoppingCart = function () {
  let newObj = { id: 12, name: "Mouse Pad", price: 12.99, quantity: 2 };
  shoppingCart.push(newObj);
};

addToShoppingCart();

console.log(shoppingCart);

console.log(`%===================================%`);
/* EXTRA 4
Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

let mostExpansive = shoppingCart[0];
/* SCRIVI QUI LA TUA RISPOSTA */
const maxShoppingCart = function () {
  for (let i = 0; i < shoppingCart.length; i++) {
    let item = shoppingCart[i];

    if (item.price > mostExpansive.price) {
      mostExpansive = item;
    }
  }
  return mostExpansive;
};

maxShoppingCart();

console.log(`The most expansive item is ${mostExpansive.name}`);

console.log(`%===================================%`);
/* EXTRA 5
Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const latestShoppingCart = function () {
  let latest = shoppingCart[shoppingCart.length - 1];
  return latest;
};

let latestItem = latestShoppingCart();

console.log(`The latest Item of your cart is: ${latestItem.name}`);

console.log(`%===================================%`);
/* EXTRA 6
Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const loopUntil = function (x) {
  let consecutiveCount = 0;

  while (consecutiveCount < 3) {
    let randomNum = Math.floor(Math.random() * 10);

    if (randomNum > x) {
      consecutiveCount++;
      console.log(randomNum);
    } else {
      consecutiveCount = 0;
    }
  }
};

let randomNumbers = loopUntil(1);

console.log(`%===================================%`);
/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numbers = ["my", 45, 12, "name", 54, "hi", 5, "is", 15];

const average = function (numArray) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < numArray.length; i++) {
    const n = numArray[i];

    if (typeof n === `number`) {
      sum += n;
      count = count + 1;
    }
  }
  return sum / count;
};

let averageRes = average(numbers);

console.log(`Average is: ${averageRes}`);

console.log(`%===================================%`);
/* EXTRA 8
Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let strings = ["hello", "delivery", "syntax", "actually", "remember", "long", "seek", "hide", "extraordinary", "incomprehensible", "interesting", "atomic"];

let longestWord = "";

const longest = function (strings) {
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longestWord.length) {
      longestWord = strings[i];
    }
  }
};

longest(strings);

console.log(longestWord);

console.log(`%===================================%`);

/* EXTRA 9
Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const emailContent = [
  "Hello, your order has been shipped and will arrive tomorrow.",
  "URGENT: Click here to claim your lottery prize worth $1 million! This is not a scam!",
  "Meeting reminder: Team standup at 2 PM today in conference room A.",
  "You have won a free vacation! Send us your credit card details to claim.",
  "Your monthly report is ready for review. Please check the attached file.",
  "SPAM ALERT: Buy cheap medicine online with no prescription needed!",
  "Happy birthday! Hope you have a wonderful day celebrating.",
  "This is a scam email trying to steal your personal information.",
  "New message from your bank: Please verify your account immediately.",
  "Discount on electronics! 50% off all items this weekend only.",
  "SPAM: Make money fast working from home! No experience required!",
  "Your appointment with Dr. Smith has been confirmed for Friday at 3 PM.",
  "Nigerian prince needs your help transferring money. This is definitely a scam.",
  "Weekly newsletter: Top 5 productivity tips for remote workers.",
  "SPAM WARNING: Free gift cards available, just enter your personal data!",
];

// console.log(emailContent);

const spamFilter = function (emailText) {
  const upperEmail = emailText.toUpperCase();
  if (upperEmail.includes("SPAM") || upperEmail.includes("SCAM")) {
    return false;
  } else {
    return true;
  }
};
for (let i = 0; i < emailContent.length; i++) {
  let result = spamFilter(emailContent[i]);
  console.log(`Email: ${result}`);
}

console.log(`%===================================%`);
/* EXTRA 10
Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let oldDate = new Date("2021-12-04");
let todayDate = new Date();

console.log(`Date: ${todayDate.toDateString()}`);

const dateDiff = function (oldDate) {
  let todayDate = new Date();
  let diffDate = Math.floor((todayDate - oldDate) / 86400000);
  return diffDate;
};

let dateResult = dateDiff(oldDate);

console.log(`The difference in day by: ${oldDate.toDateString()}, to today is: ${dateResult} days`);

console.log(`%===================================%`);
/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
