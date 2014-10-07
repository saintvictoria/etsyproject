// console.log(items)
 // console.log average price of items
 //gets number of items
// var numItems = items.length;
//average price of items
// var sum = allPrices/numItems;
// var sumAverage sum (parseIntg)
// console.log(sumaverage)

var allPrices = [];

var moving = items.forEach(function(it) {
  allPrices.push(it.price);
});

var total = allPrices.reduce(function (bob, foo){
  return bob+foo;
});

var average = total/allPrices.length;

console.log('the average price is '+ (average.toFixed(2)))


//Show me how to get an array of items that cost between $14.00 and $18.00 USD
// if item >14 but <18 print out console.log
// var plusItems = function isMoreThan(price) {
//   return element >= 14;//
// var minusItems = function isLessThan(price) {
//   return element <=18:
// console.log(plusItems+minusItems)

var midPriceItems = items.filter( function (it){
  if (14 <= it.price && 18 >= it.price && "USD" === it.currency_code) {
    return true;
  } else {
      return false;
  }
});
console.log('the midprice is ' + midPriceItems)


// Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
// if item = gbp then console.log &pound \u00A3

var GBPitem = items.filter(function (it){
  if ("GBP" === it.currency_code){
    return true;
  } else {
      return false;
      }
});
console.log('the GBP item is ' +GBPitem)


//var array = list items
// Show me how to find which items are made of wood. Please console.log the ones you find.
// when items materials = wood console.log
//var materials = itemsMaterials
var woodItems = items.filter(function (it){
  if ("wood" === it.materials){
    return true;
  } else {
      return false;
      }
});
console.log('The wood items are ' +woodItems)


// Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
// when items materials <= 8


 var multiItems =items.filter(function(it) {
  return it.materials <= 8;
});
console.log('the multi itmes are '+ multiItems)


// Show me how to calculate how many items were made by their sellers
// if items ==="i-did" console.log
// var I_Did = document.getElementById.length
//     console.log(I_Did)

var handMade = items.filter( function (it){
  if ('i_did' === it.who_made) {
    return true;
  } else {
      return false;
  }
});
console.log('this many items were made by hand '+handMade)
