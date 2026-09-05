
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

