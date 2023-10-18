// Raccolta dati

const userDistance = parseInt(
  prompt("Ciao Utente! Inserisci il numero di Kilometri che desideri")
);
const userAge = parseInt(prompt("Inserisci qui l'età del passeggero"));
console.log(userAge, userDistance);

// Logica

let price = userDistance * 0.21;
console.log(price);
let reduction = 0;

//Sconti?

if (userAge < 18) {
  reduction = price * 0.2;
  price = price - reduction;
  console.log(price);
} else if (userAge > 65) {
  reduction = price * 0.4;
  price = price - reduction;
  console.log(price);
} else {
  price = price;
  console.log(price);
}

//Rendo il prezzo con due cifre decimali
price = price.toFixed(2);
console.log(price);

//Preparo il ticket

let ticket = `Il tuo biglietto costa ${price}€, buon viaggio!`;

//Output
document.getElementById("ticket").innerHTML = ticket;
