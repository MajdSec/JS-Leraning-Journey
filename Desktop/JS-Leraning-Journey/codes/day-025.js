function sayHello(UserName) {
  console.log(`hi ${UserName}`);
}

sayHello("masr");
sayHello("kadar");

function sayHello(UserName, age) {
  if (age < 26) {
    console.log("add is not suitable for you");
  } else {
    console.log(`hi ${UserName} your age is ${age}`);
  }
}

sayHello("masr", 56);
sayHello("marata", 85);
sayHello("kadar", 25);

function generateYears(start, end, exclude){  

    for (let i = start; i <= end; i++){
if (i === exclude){
    continue;}
console.log(i)}
}

generateYears(1899, 2011, (1900, 2000))