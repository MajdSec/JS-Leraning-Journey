// // Ranges


// // 1. Using the OR (|) Operator
// let tld = "Com Net Org Info Code Io";
// let tldRe = /(info|org|io)/ig;
// console.log(tld.match(tldRe)); 

// // 2. Using Number Ranges [0-9]
// let nums = "12345678910";
// let numsRe = /[0-2]/g;
// console.log(nums.match(numsRe)); 

// // 3. Using Negation (not) in Ranges [^]
// let notNumsRe = /[^0-2]/g;
// console.log(nums.match(notNumsRe)); 

// // 4. Extracting Special Characters (Excluding Numbers)
// let specialNums = "1!2@3#4$5%678910";
// let specialNumsRe = /[^0-9]/g;
// console.log(specialNums.match(specialNumsRe)); 

// // 5. Combining Text with Ranges
// let practice = "Os1 Os1Os Os2 Os8 Os8Os";
// let practiceRe = /Os[5-9]Os/g;
// console.log(practice.match(practiceRe));

//----------------------------------------------------------//

 let files = "db_backup.sql, user_data.csv, server_logs.txt, app_config.json, old_data.csv";

 let koke = files.match(/json|csv/g)

 console.log(koke)

//----------------------------------------------------------//
 
let corruptedKey = "aB1@c#D2$eF3%gH4";

nona = corruptedKey.match(/[^a-z0-9]/gi)

console.log(nona)

//----------------------------------------------------------//

let manifest = "a1 b2 y3 M5 C4 z1 X2 D1 x9 c3 P2";

let uperMan = manifest.match(/[a-cx-z][1-3]/gi)

console.log(uperMan)

//-----------------------------------------------------------//

let transmission = "@#$B1%^&*()_ a3! ~M8< >z9? {X4} [c7] |k2|";

let madMan = transmission.replace(/[^a-z0-9]/ig, "")

let cleanData = madMan

let nana = cleanData.match(/[a-mx-z][1-5]/gi)

console.log(nana)

//-----------------------------------------------------------//

let rawHTML = "<header>Welcome Yassir</header><main>BackEnd Master</main><footer>Server 2026</footer>";

let noWay = rawHTML.replace(/<[^>]+>/g, " ")//Soon

console.log(noWay);

//-----------------------------------------------------------//

let serverNetwork = "Connected: Bot-A3Y, Bot-M4X, Bot-c1z, Bot-B9Z, Bot-A$X, Bot-b5x";

let naas = serverNetwork.match(/bot-[A-C][0-5][X-Z]/gi)

console.log(naas)