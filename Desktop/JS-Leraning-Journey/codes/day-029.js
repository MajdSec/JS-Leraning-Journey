function calc(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return `the last number is ${result}`;
}

console.log(calc(12, 12, 100, 58, 69));
///////////////////////////////////////////////////////////////

function calculateBlast(...bombs){

  let total = 1;

 for(let m = 0; m < bombs.length; m++) {

total *= bombs[m];
 }
 return `the totali is ${total}`;
}

console.log(calculateBlast(12, 52, 45, 52));
//////////////////////////////////////////////////////////////////
function findStorngest(...Levels){
    let max = Levels[0];

    for(let s = 0; s < Levels.length; s++){
if(max < Levels[s]){
    max = Levels[s]
}
}
     return `the totali ${max}`;
}

console.log(findStorngest(10, 50, 99, 2, 5));
///////////////////////////////////////////////////////////////
function countAdults(...ages){


let sentence = []
for(let r = 0; r < ages.length; r++){

if(20 < ages[r])
    {sentence.push(ages[r]);
}
}
return `totlai is ${sentence}`
}
console.log(countAdults(10, 45, 12, 30, 18, 60))