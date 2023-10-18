##Esercizio
programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)

- Va applicato uno sconto del 20% per i minorenni
- Va applicato uno sconto del 40% per gli over 65.
  L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

##Soluzione

###Raccolta dati

1. Chiedo all'utente il numero di kilometri che vuole percorrere.
   userDistance
2. Chiedo all'utente l'età del passeggero.
   userAge

###Logica

1. Moltiplico i kilometri per il prezzo di base 0.21€
   price = userDistance \* 0.21
2. Controllo se il passeggero ha meno di 18, se si applico uno del 20 %sconto.
   reduction = price \* 0.20
   price = price - reduction
3. Controllo se il passeggero ha più di 65 anni, se sì applico uno sconto del 40%.
   reduction = price \* 0.40
   price = price - reduction
4. Rendo il prezzo con due cifre decimali

5. preparo il messaggio del costo del biglietto

   ticket = `Il tuo biglietto costa ${price}, Buon Viaggio!`;

###Output

1.Stampo il ticket in html
document.getElementById().innerHtml = ticket;
