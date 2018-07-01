
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
    sum += stock[i].price * stock[i].count;
}
alert(sum);

//Írja ki a termékek átlagárát

var sum = 0;
for (var i = 0; i < stock.length; i++) {
    sum += stock[i].price;
}
alert(`${sum/stock.length}`);

//Készítsetek egy függvényt, amely rendezi a termékeket ár szerint növekvő sorrendbe. Írjátok ki konzolra.

function ascendingOrder(stock) {
    for (var i = 0; i < stock.length-1; i++) {
        var smallest = i;
        for (var j = i+1; j < stock.length; j++) {
            if (stock[smallest].price > stock[j].price) {
                smallest = j;
            }
        }
        var change = stock[i];
        stock[i] = stock[smallest];
        stock[smallest] = change;
    }
}
ascendingOrder(stock);

//Készítsetek egy függvényt, ami leszűri a 3 legnépszerűbb terméket, azaz amelyekből a legtöbbet adtak el. Írjátok ki konzolra.

function threeMostPopular(stock) {

    for (var i = 0; i < 3; i++) {
        var popular = i;
        for (var j = i+1; j < stock.length; j++) {
            if (stock[popular].sold < stock[j].sold) {
                popular = j;
            }
        }
        var change = stock[i];
        stock[i] = stock[popular];
        stock[popular] = change;
    }
    console.log(`A három legnépszerűbb termék:\n${stock[0].name} \n${stock[1].name} \n${stock[2].name}`)
}


threeMostPopular(stock);

//Készítsetek egy függvényt, ami leszűri a 3 legújabb terméket. Írjátok ki konzolra.

function threeNewestProduct(stock) {

    for (var i = 0; i < 3; i++) {
        var newest = i;
        for (var j = i+1; j < stock.length; j++) {
            if (stock[newest].createdAt < stock[j].createdAt) {
                newest = j;
            }
        }
        var change = stock[i];
        stock[i] = stock[newest];
        stock[newest] = change;
    }
    console.log(`A három legújabb termék:\n${stock[0].name} \n${stock[1].name} \n${stock[2].name}`)
}

threeNewestProduct(stock);
