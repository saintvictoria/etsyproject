
var printer = function(item){
return '"' + item.title +'"\n';
}

/*Question 1 */

var allPrices = items.map(function(it) {
 return it.price;
});

var total = allPrices.reduce (
  function (previousValue, currentValue){
  return previousValue + currentValue;
}, /*initialValue*/ 0
);

var average = total/allPrices.length;

console.log('the average price is '+ (average.toFixed(2)))

/*Question 2*/

var midPriceItems = items.filter( function (it){
  if (14 <= it.price && 18 >= it.price && "USD" === it.currency_code) {
    return true;
  } else {
      return false;
  }
});
console.log('the midprice items are ' + midPriceItems.map(printer))

/*Question 3*/

var GBPitem = items.filter(function (it){
  if ("GBP" === it.currency_code){
    return true;
  } else {
      return false;
      }
});
console.log('the GBP item is ' +GBPitem.map(printer))

/*Question 4*/

var woodItems = items.filter(function (it){
  if (it.materials.indexOf("wood") >= 0){
    return true;
  } else {
      return false;
      }
});
console.log('The wood items are ' +woodItems.map(printer))

/*Question 5*/

 var multiItems =items.filter(function(it) {
  return it.materials <= 8;
});
console.log('the multi itmes are '+ multiItems.map(printer))

/*Question 6*/

var handMade = items.filter( function (it){
  if ('i_did' === it.who_made) {
    return true;
  } else {
      return false;
  }
});
console.log('this many items were made by hand '+handMade.map(printer))
