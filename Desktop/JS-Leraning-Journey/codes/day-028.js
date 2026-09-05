function sayHello(username, age) {
  if (age === undefined) {
    age = "unknown";
  }
  return `Hello ${username} your age is ${age}`;
}
console.log(sayHello("osama", 52));




function sayHello(username, age) {
  age = age || "unkwone";
  return `Hello ${username} your age is ${age}`;
}
console.log(sayHello("osama"));
///////////////////////////////////////////////////////////////////////////////////////
function sayHello(username = "unknowm", age = "unknowm"){

return `Hello ${username} your age is ${age}`;

}
console.log(sayHello(undefined, 48))
/////////////////////////////////////////////////////////////////////////////////////////
function configureBot(botName = ".....", targetSite = ".....", speed = "....."){

return `System: Launching ${botName} targetSite ${targetSite} speed ${speed}`;

}

console.log(configureBot("sniper_bot", "Amazon.com", "1000ms"));

console.log(configureBot())

console.log(configureBot(undefined, undefined, "Fast_Mode"))
/////////////////////////////////////////////////////////////////////////////////////
 function calculareAmmo(squadName  =  "nun", soldiers = "nun", bulletsPerSoldier = "nun"){

let totalAmmo = soldiers * bulletsPerSoldier; 

 return `mission: ${squadName} needs total ${totalAmmo} rounds`;

}

console.log(calculareAmmo())
console.log(calculareAmmo("Alpha" , 20 ,100))
console.log(calculareAmmo(undefined, 10, 200))