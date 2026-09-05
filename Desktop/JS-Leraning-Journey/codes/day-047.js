let prices = [50, 20, 100, 30, 80];

let TheBestPrice = prices.reduce(function (acc, current) {
  if (current > acc) {
    return current;
  } else {
    return acc; //add if - else - > = 100
  }
});
console.log(TheBestPrice);

//-------------------------------------------------------------------------//

let letters = ["I", " ", "L", "o", "v", "e", " ", "J", "S"];

let TheDay = letters.reduce(function (acc, current) {
  return acc + current; // just + = I Love Js
});
console.log(TheDay);

//-------------------------------------------------------------------------//

let Mansar = ["I", "@", "L", "o", "v", "e", "@", "J", "S"];

let Nasar = Mansar.filter((M) => {
  return !M.startsWith("@"); //just last try of curs from my memory
}).reduce((acc, current) => {
  return `${acc}${current}`;
});

console.log(Nasar);

//----------------------------------------------------------//
/////////////////// ForEach() ////////////////////////////////
//----------------------------------------------------------//

let sites = ["Google", "Facebook", "Twitter"];

sites.forEach(function (site) {
  console.log(`Scanning: ${site}...`); //we don't have reture saw we print be clg
});

//-------------------------------------------------------------------//

let pricess = [100, 2500, 500, 4000, 900];

let Naser = pricess.forEach((price) => {
  if (price < 1000) {
    console.log(`High Value: ${price}`); //we us clg inside code with forEach
  } else {
    console.log(`Low Value ${price}`);
  }
});

//-------------------------------------------------------------------//


let numbers = [10, 20, 30];

let karam = numbers.forEach(function(num) {

  karam = karam + num;
});
console.log(karam);//(total is not defined)