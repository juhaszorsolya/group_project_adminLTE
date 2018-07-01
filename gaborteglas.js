/*1.feladat*/
var i = 0;
var best = stock[i]
for (i = 0; i < stock.length; i++) {
    if (stock[i].sold > best.sold) {
        best = stock[i];
    }
}
console.log(best.name, best.sold);

/*2.feladat*/
var i = 0;
var legújabb = stock[i]
for (i = 0; i < stock.length; i++) {
    if (stock[i].createdAt > legújabb.createdAt) {
        legújabb = stock[i];
    }
}
console.log(legújabb.name, legújabb.createdAt);

/*3. feladat*/
var i = 0;
var fullprice = 0;
while (i < stock.length) {
    fullprice += stock[i].price;
    i++;
}
console.log(fullprice)

/*4.feladat*/
var i = 0;
var fullprice = 0;
while (i < stock.length) {
    fullprice += stock[i].price;
    i++;
}
console.log(parseInt(fullprice / stock.length))