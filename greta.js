var mostSold = stock[0];
for (var i = 0; i < stock.length; i++) {
    if (mostSold.sold > stock[i].sold) {
        mostSold = stock[i];
    }
}
console.log(mostSold.name);

var newestDate = stock[0];
for (var i = 0; i < stock.length; i++) {
    if (newestDate.createdAt > stock[i].createdAt) {
        newestDate = stock[i];
    }
}
console.log(newestDate.name);

var sum = 0;
for (var i in stock) {
    sum += stock.price;
}
console.log(sum);

var average = 0;
for (var i in stock) {
    average += stock.price
}
console.log(average / stock.length);