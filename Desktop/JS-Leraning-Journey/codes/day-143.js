// ==========================
// 1. Array.from()
// Goal: Convert text to an array.
// ==========================

let word = "Ali";
let newArray = Array.from(word);

console.log(newArray); 
// Result: ["A", "l", "i"]


// ==========================
// 2. some()
// Goal: Check if AT LEAST ONE item matches the condition.
// ==========================

let numbers = [10, 20, 0, 30]; 

// Is there a zero?
let hasZero = numbers.some(num => num === 0);

console.log(hasZero); 
// Result: true


// ==========================
// 3. copyWithin()
// Goal: Copy and paste inside the same array.
// ==========================

let items = [1, 2, 3, 4, 5];

// Paste at start (index 0), copy from (index 3)
items.copyWithin(0, 3);

console.log(items);
// Result: [4, 5, 3, 4, 5]

//==============================
// 4. every()
// Goal: Check if ALL items match the condition.
// ==========================

// Scenario 1: All pass
let ages = [20, 22, 25, 21]; 

// Are ALL people 18 or older?
let allAdults = ages.every(age => age >= 18);

console.log(allAdults); 
// Result: true (Because every single number is >= 18)