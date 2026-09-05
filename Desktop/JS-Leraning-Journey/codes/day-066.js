// //Destructuring Function


// const user = {
//   theName: "Osama",
//   theAge: 39,
//   skills: {
//     html: 70,
//     css: 80,
//   }
// };

// function showDetails(obj) {
//   console.log(`Your Name is ${obj.theName}`);
//   console.log(`Your Age is ${obj.theAge}`);
//   console.log(`Your CSS Skill Progress is ${obj.skills.css}`);
// }// (obj.)for call the object 

// showDetails(user);

// //---------------------------------------------------------//

// function showDetails({ theName, theAge, skills: { css } }) {
//   console.log(`Your Name is ${theName}`);
//   console.log(`Your Age is ${theAge}`);
//   console.log(`Your CSS Skill Progress is ${css}`);
// }
// showDetails(user);

 //---------------------------------------------------------//

const newEmployee = {
  empName: "Ahmad",
  salary: 5000
};

let hireUser = (({empName,dept = "IT" })=>{


console.log(`welcome ${empName}, you work in${dept}`)


})
hireUser(newEmployee)

 //---------------------------------------------------------//

 const deliveryOrder = {
  orderId: 99,
  shipping: {
    loc: "Hatay",
    fee: 50
  }
};

let trackOrder = (({orderId,shipping : {loc : city }})=>{//don't forgit let or const 

    console.log(`Order #${orderId} is going to ${city}`)


})
trackOrder(deliveryOrder)//you have to call function

 //---------------------------------------------------------//

 const product = {
  title: "Smart Watch",
  price: 200
 
};

let printReceipt = (({title, price, tax = "15"})=> {

    console.log(`you bought ${title} Watch fot ${price}, tac is ${tax}`)



})
printReceipt(product)

 //---------------------------------------------------------//

 const hero = {
  heroName: "Arthur",
  combat: {
    sword: "Excalibur",
    damage: 500
  }
};
let heroAttack = (({heroName, combat : {sword : weapon}})=>{

console.log(`${heroName} attacks with ${weapon}`)


})
heroAttack(hero)

 //---------------------------------------------------------//

 const serverResponse = {
  code: 200,
  status: "Success",
  responseTime: "12ms",
  payload: {
    userName: "Yassir_Engineer",
    role: "Admin"
  }
};
let logSystem = ({code, payload : {userName},...metadata}) =>{
console.log(`kod is ${code} username is ${userName} the order is `,metadata)
}

logSystem(serverResponse)
//when we call function all data without role because we Destructuring the object soo we removed the element we don't used


 //---------------------------------------------------------//

const gameSave = {
  saveId: "SV-77",
  playerDetails: {
     hp: 100,
     stamina: 50,
     magic: 200
  },
  inventory: ["Sword", "Shield", "Health Potion"]
};


 let loadGame = ({saveId,difficulty = "hard", playerDetails : {hp : health,...otherStats},inventory:[a,,]}) =>{
   
console.log(`the player name is ${saveId} the core ${difficulty} health is ${health} the weapon is ${a}`)
console.log(otherStats)
}
loadGame(gameSave)

 //---------------------------------------------------------//

 const spaceMission = {
  missionId: "APOLLO-X",
  commander: {
    name: "Yassir",
    vitals: {
       heartRate: 80,
       oxygen: 98
    }
  },
  crew: ["Ali", "Sara", "John"],
  equipment: {
     suits: 4,
     rovers: 1
  }
};

let launchMission = ({missionId : id, commander : {vitals : {heartRate : pulse , temperature = "37"}},crew:[,coPilot,],...remainingAssets} = spaceMission)=>{

console.log(`Mission ${id} | Pulse: ${pulse} | Temp: ${temperature} | Co-Pilot: ${coPilot}`);
console.log("Assets left:", remainingAssets);
}
launchMission()