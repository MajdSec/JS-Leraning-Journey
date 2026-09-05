// //OOP Inheritance / Static

// const { jsx } = require("react/jsx-runtime");

// class Employee {
//   static staffCount = 0;
//   constructor(name) {
//     this.name = name;
//     Employee.staffCount++;
//   }
// }

// class developer extends Employee {
//   constructor(name, language) {
//     super(name);
//     this.language = language;
//   }
//   WriteCode() {
//     console.log(`${this.name} is writing code in ${this.language}`);
//   }
// }

// const Scra = new developer("Samer", "Eng");

// Scra.WriteCode();
// Employee.staffCount;
// console.log(Employee.staffCount);
// console.log(Scra);

// //---------------------------------------------------------------------------//

// class Bot {
//   constructor(botName) {
//     this.botName = botName;
//   }
// }

// class ScraperBot extends Bot {
//   constructor(botName, targetWebsite) {
//     super(botName);
//     this.targetWebsite = targetWebsite;
//   }
//   startScraping() {
//     console.log(
//       `${this.botName} is collecting data from ${this.targetWebsite}...`,
//     );
//   }
// }

// const websites = ["Amazon", "Google", "Apple", "Tesla"];

// // The Fixed Loop
// for (let i = 0; i < websites.length; i++) {
//   // 1. Get the current website from the array
//   let currentSite = websites[i];

//   // 2. Create a dynamic name for the bot (Bot 1, Bot 2, etc.)
//   let dynamicBotName = "Bot " + (i + 1);

//   // 3. Create the object (Instantiate the bot)
//   let myBot = new ScraperBot(dynamicBotName, currentSite);

//   // 4. Fire the method
//   myBot.startScraping();
// }

//-----------------------------------------------------------------//

class Vehicle {
  static totalVehicles = 0;
  constructor(brand, pricePerDay) {
    this.brand = brand;
    this.pricePerDay = pricePerDay;
    this.isRendted = false;
    Vehicle.totalVehicles++;
  }
  rent() {
    if (this.brand != this.isRendted) {
      console.log(`${this.brand} rented successfully.`);
    } else {
      console.log(`Sorry, ${this.brand} is already rented.`);
    }
  }
}

class LuxuryCar extends Vehicle {
  constructor(brand, pricePerDay, hasChauffeur) {
    super(brand, pricePerDay);
    this.hasChauffeur = hasChauffeur;
  }
  rentWithChauffeur() {
    if (this.hasChauffeur === true) {
      console.log(`${this.brand} rented with chauffeur.`);
    } else {
      console.log(`${this.brand} rented without chauffeur.`);
    }
  }
}

let borch = new LuxuryCar("borc", 100, false);

let toyota = new LuxuryCar("toyota", 70, true);

let kia = new LuxuryCar("Kia", 50, false)

let fleet = [borch, toyota, kia];

for (let i = 0; i < fleet.length; i++) {
  
  let currentCar = fleet[i];
  
  if (currentCar.pricePerDay >= 100) {
    console.log(`${currentCar.brand} is expensive.`);
  } else {
    console.log(`${currentCar.brand} is affordable.`);
  }
  
}

console.log(`Total Vehicles: ${Vehicle.totalVehicles}`);