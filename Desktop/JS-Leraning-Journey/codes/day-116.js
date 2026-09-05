const myLibrary = {
  creator: "Your Name",
  year: 2024,
};

Object.defineProperty(myLibrary, "coreFunction", {
  value: "This is the heart of the library!", // The actual value
  writable: false, // ❌ Cannot be changed or updated(Just Read)
  enumerable: false, // ❌ Will be hidden from loops(Hiding)
  configurable: false, // ❌ Cannot be deleted or re-configured(Can't change)
});

console.log("--- Initial Library State ---");
console.log(myLibrary.coreFunction);

console.log("\n--- Attempt 1: Changing Value ---");
myLibrary.coreFunction = "I hacked this library!";
console.log("Result after trying to change: " + myLibrary.coreFunction);
console.log("\n--- Attempt 2: Looping (Is it hidden?) ---");
for (let key in myLibrary) {
  console.log("Found property: " + key);
}

console.log("\n--- Attempt 3: Deleting ---");
delete myLibrary.coreFunction;
console.log("Result after trying to delete: " + myLibrary.coreFunction);

//--------------------------------------------------------------------//

// ==========================================
// 🏛️ The Old Way: Manual Prototype (Before 2015)
// ==========================================

function OldHero(name) {
    this.name = name;
}

OldHero.prototype.attack = function() {
    console.log(this.name + " is attacking! (Old Way)");
};

const batman = new OldHero("Batman");
batman.attack(); 

// ==========================================
// 🚀 The Modern Way: Using Class (2015 to Present)
// ==========================================

class ModernHero {
    constructor(name) {
        this.name = name;
    }
  attack() {
        console.log(this.name + " is attacking! (Modern Way)");
    }
}

const superman = new ModernHero("Superman");
superman.attack();

//--------------------------------------------------------------//

 // 1. Class        : The factory blueprint to create objects.
// 2. Private (#)  : Secret data locked inside the class.
// 3. Static       : Shared memory for the factory, not the products.
// 4. Inheritance  : Copying a parent class to build a child (extends/super).
// 5. Prototype    : Hidden shared memory for functions to save space.
// 6. Security     : Object.defineProperty() locks properties (writable/enumerable/configurable: false) = to make librays.

//--------------------------------------------------------------//

let dateNow = new Date();
console.log("Current Date & Time: ", dateNow);
let msNow = Date.now();
console.log("Milliseconds since 1970: ", msNow);



console.log("\n--- استخراج أجزاء التاريخ ---");

console.log("Year: ", dateNow.getFullYear()); 
console.log("Month (0-11): ", dateNow.getMonth()); 

console.log("Day of the Month: ", dateNow.getDate()); 

console.log("Day of the Week (0-6): ", dateNow.getDay()); 



console.log("\n--- استخراج أجزاء الوقت ---");

console.log("Hours: ", dateNow.getHours());
console.log("Minutes: ", dateNow.getMinutes());
console.log("Seconds: ", dateNow.getSeconds());


let myBirthday = new Date("1995-10-25");
console.log("\nMy Birthday is: ", myBirthday);

//getMonth start from 0
//getday start from sunday 