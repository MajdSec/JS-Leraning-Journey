//Quantifiers part 2

// let myString = "We Love Programming";
// let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// console.log(/^We/i.test(myString));//start with 

// console.log(/Programming$/i.test(myString));//test text (ture / false) + $ end with 

// console.log(names.match(/\d\w{5}(?=Z)/gi));//with following with Z

// console.log(names.match(/\d\w{8}(?!Z)/gi));//with not following with z 

// //-----------------------------------------------------------------//

// let txt = "We Love Programming And @ Because @ Is Amazing";

// console.log(txt.replace("@", "JavaScript"));//change ones element 
// console.log(txt.replaceAll("@", "JavaScript"));// Change All elements
// let re = /@/gi;
// console.log(txt.replace(re, "JavaScript"));

//-------------------------------------------------------------//

let serial1 = "ABC-1234-xy"; 
let serial2 = "AB-1234-xy"; 
let serial3 = "ABCD-123-xyz";
let serial4 = " ABC-1234-xy"; 

let regex1 = /^[A-Z]{3}-\d{4}-[a-z]{2}$/;

console.log(regex1.test(serial1)); 
console.log(regex1.test(serial2)); 
console.log(regex1.test(serial3)); 
console.log(regex1.test(serial4));

//------------------------------------------------------------------//

let tweet = "Hello @Ali and @Osama. Call @Mona123 or @Jo";

let regex2 = /\@\w{3,5}\b/ig;

console.log(tweet.match(regex2));

//------------------------------------------------------------------//

let chat = "This is b a d! And this is b...a...d. But this is b-a--d. Also bad.";

let regex3 = /b\W{1,3}a\W{1,3}d/ig;

console.log(chat.replace(regex3, "***"));

//------------------------------------------------------------------//

let logs = "Error at 192.168.0000. Ignore 123.456.7890. Also skip 12.345.6789 and 1234.567.8900.";

let regex4 = /\b\d{3}\.\d{3}\.\d{4}\b/g;

console.log(logs.match(regex4));

//------------------------------------------------------------------//

let inv1 = "INV_1590_2024";
let inv2 = "INV_1590_2028"; 
let inv3 = "INV_159_2022";  
let inv4 = "MyINV_1234_2021";

let regex5 = /^INV_\d{4}_202[0-6]$/;

console.log(regex5.test(inv1)); 
console.log(regex5.test(inv2)); 
console.log(regex5.test(inv3)); 
console.log(regex5.test(inv4));

//---------------------------------------//

//for lookarounds ?!/?= not now, when I finish in last 

//the global(g) don't work with test because of (lastindex)

//when you (start|end) with (^|$) you don't need to use \d

//-----------------------------------------------------------------//

//Final assigmnent RegEx


let key1 = "BOT-abcd.LIFETIME@Z";    
let key2 = "APP-XyzAb.2024*&M";     
let key3 = "BOT-oSaMa.99!!!X";      
let key4 = "API-abcd.LIFETIME@Z"; 
let key5 = "BOT-abc.LIFETIME@Z";   
let key6 = "BOT-ab12.LIFETIME@Z";   
let key7 = "APP-XyzAb.2024M";    
let key8 = "APP-XyzAb.2024*&M9";
let key9 = "BOT-abcd.LIFE@Z";     

let ultimateRegex = /^(BOT|APP)-[a-zA-Z]{4,6}\.(LIFETIME|\d{2,4})\W+[A-Z]$/;

console.log(ultimateRegex.test(key1)); 
console.log(ultimateRegex.test(key2)); 
console.log(ultimateRegex.test(key3));
console.log(ultimateRegex.test(key4)); 
console.log(ultimateRegex.test(key5)); 
console.log(ultimateRegex.test(key6)); 
console.log(ultimateRegex.test(key7)); 
console.log(ultimateRegex.test(key8)); 
console.log(ultimateRegex.test(key9)); 

