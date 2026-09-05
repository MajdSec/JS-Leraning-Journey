// const { cloneElement } = require("react");

// // Open connection
// Nar.addEventListener("click", handleClick);

// // Multiple tasks
// Nar.addEventListener("focus", function () {});
// Nar.addEventListener("blur", function () {});
// Nar.addEventListener("click", function () {});

// // Close connection (for memory)
// Nar.removeEventListener("click", handleClick);

// //addEventListener : Open connection with element

// //removeEventListener : Close connection when done (for memory )

// //Attach Multiple Events : Multiple tasks on same element

// // we using these option because the onclick take just the last one

// //--------------------------------------------------------------------//

// setTimeout(function () {
//   console.log("type no");
// }, 7000); // type the text after 7 sec
// // 7 will never work we have type number lile this = 7000 and we need to give the function name (var)

// clearTimeout; //To stop function before start (for the problems )

//-------------------------------------------------------------//

let dataSaved = true;

let Mar = setTimeout(() => {
  console.log("Waring : no signal");
}, 6000);

if (dataSaved === true) {
  console.log("cancel opreation");
  clearTimeout(Mar);
}

//-------------------------------------------------------------//

console.log("it's work");

setTimeout(() => {
  console.log(`${couponcode}
         "the end"`);
}, 8500);

let couponcode = "savd-99";

//-------------------------------------------------------------//

let safeDelay = Math.floor(Math.random() * 4000) + 3000;

setTimeout(() => {
  console.log(`the ps sussful after ${safeDelay}`);
}, safeDelay);

//-------------------------------------------------------------//

let serverResponse = {
    status: 200, 
    secretKey: "Yassir-Super-Maryo-99"
};

let apiDelay = Math.floor(Math.random()*5000) + 2000;

setTimeout(()=>{ 
    
    
    console.log(`we finish in ${apiDelay} and the key is ${serverResponse.secretKey}`)
},apiDelay)

