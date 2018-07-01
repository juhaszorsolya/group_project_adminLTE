
//Írja ki a legnépszerűbb terméket, tehát azt amelyikből a legtöbbet adtak el
var popular = stock[0];
for (var i = 1; i < stock.length; i++) {
    if (popular.sold < stock[i].sold) {
        popular = stock[i];
    }
}
alert(popular.name);

//Írja ki a legújabb terméket

var newest = stock[0];
for (var i = 1; i < stock.length; i++) {
    if (newest.createdAt < stock[i].createdAt) {
        newest = stock[i];
    }
}
alert(newest.name);

//Írja ki a termékek összárát

var sum = 0;
for (var i = 0; i < stock.length; i++) {
    sum += stock[i].price;
    }
alert(sum);

//Írja ki a termékek átlagárát

var sum = 0;
for (var i = 0; i < stock.length; i++) {
    sum += stock[i].price;
    }
alert(`${sum/stock.length}`);

//Készítsetek egy függvényt, amely rendezi a termékeket ár szerint növekvő sorrendbe. Írjátok ki konzolra.

function ascendingOrder() {
    
}
