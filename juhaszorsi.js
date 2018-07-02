/*Készítsetek statisztikát, mely kiírja a konzolra:
○	A legnépszerűbb terméket, tehát azt amelyikből a legtöbbet adtak el
○	A legújabb terméket
○	Termékek összára
○	Termékek átlagára*/

var mostSold = stock[0].sold;
var mostPopular = {};
for (var i = 1; i < stock.length; i++) {
    if (mostSold > stock[i].sold) {
        mostPopular = stock[i];
    }
}
console.log(mostPopular);

var totalPrice = 0;
for (var i = 0; i < stock.length; i++) {
    totalPrice += stock[i].price;
}
console.log(totalprice);

var avgPrice = 0;
for (var i = 0; i < stock.length; i++) {
    avgPrice += stock[i].price;
} avgprice = avgPrice / stock.length;
console.log(avgPrice);