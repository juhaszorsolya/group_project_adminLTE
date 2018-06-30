/*1.feladat*/
var i = 1;
var prices = [];
while (i < stock.length) {
    prices.push(stock[i].price);
    i++;
}
console.log(Math.max(...prices))

/*2.feladat*/
var i = 1;
var dates = [];
while (i < stock.length) {
    dates.push(new Date(stock[i].createdAt));
    i++;
}
console.log(new Date(Math.max(...dates)))

/*3. feladat*/
var i = 1;
var fullprice = 0;
while (i < stock.length) {
    fullprice += stock[i].price;
    i++;
}
console.log(fullprice)

/*4.feladat*/
var i = 1;
var fullprice = 0;
while (i < stock.length) {
    fullprice += stock[i].price;
    i++;
}
console.log(parseInt(fullprice / stock.length))