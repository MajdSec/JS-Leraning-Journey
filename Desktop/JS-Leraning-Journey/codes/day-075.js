// //class

// let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";

// // The Dot (.) - Matches ANYTHING except a new line
// let dotRe = /./g;
// console.log(email.match(dotRe));

// //  Word Character (\w) - Matches [a-zA-Z0-9_]
// let wordRe = /\w/g;
// console.log(email.match(wordRe));

// //  Non-Word Character (\W) - Matches [^a-zA-Z0-9_]
// let nonWordRe = /\W/g;
// console.log(email.match(nonWordRe));

// // The Engineering Masterpiece (Extracting Valid Emails Only)
// // Logic: (One Word Character) + (@) + (One Word Character) + (\.) + (com OR net)
// let validEmailRe = /\w@\w\.(com|net)/g;
// console.log(email.match(validEmailRe)); 

//---------------------------------------------------------------//

// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";

// //  Target: Catch 'Spam' ONLY if it's at the START of the word
// // Logic: Boundary (\b) + spam
// let spamStartRe = /\bspam/ig;
// console.log(names.match(spamStartRe)); 
// // Catches: Spam4, Spam5

// //  Target: Catch 'Spam' ONLY if it's at the END of the word
// // Logic: spam + Boundary (\b)

// let spamEndRe = /spam\b/ig;
// console.log(names.match(spamEndRe)); 
// // Catches: 1Spam, 2Spam, 3Spam

// // Target: Catch 'Spam' at the start OR at the end
// let spamAnyBoundaryRe = /(\bspam|spam\b)/ig;
// console.log(names.match(spamAnyBoundaryRe));

// //  Target: Catch 'Spam' ONLY if it's INSIDE the word (No Boundaries)
// // Logic: Non-Boundary (\B) + spam + Non-Boundary (\B)
// let spamInsideRe = /\Bspam\B/ig;
// console.log(names.match(spamInsideRe)); 

//---------------------------------------------------------------------//

// let comments = "Great post @Yassir_2026 ! I agree with @ahmed_dev. Don't spam @user123.";

// let masd = comments.match(/@\w+/g)

// console.log(masd)

// //---------------------------------------------------------------------//

// let secretMessage = "Agent 007, your access code is 9876. Server closes in 24 hours.";

// let sjjs = secretMessage.match(/\d+/g)

// console.log(sjjs)

// //----------------------------------------------------------------------//

// let badInput = "Data         base           connection           failed";

// let nssn = badInput.replace(/\s+/g," ")

// console.log(nssn)

// //----------------------------------------------------------------------//

// let serverLogs = "Please update the system. Validate the date. No outdate allowed.";

// let snns = serverLogs.match(/\bdate/g)

// console.log(snns)

// //----------------------------------------------------------------------//

// let darkLogs = "   [ERROR]   bot_X9  failed at  port_404 .  #fake_bot  passed .   [INFO]  bot_Z7  connected to port_8080 !   ";

// let cleanlogs = darkLogs.replace(/\s+/g, " ").trim()

// console.log(cleanlogs)

// let fdfd = cleanlogs.match(/bot_\w+/g)

// console.log(fdfd)

// let nana = cleanlogs.match(/[^\w\s]/g)

// console.log(nana)

//----------------------------------------------------------------------//

// let apiResponse = "   [FATAL_ERR]   server_01  crashed.  AccEsS_99!   @admin_bot   failed.  connection_err  occurred.  AccEsS_55?   ";

//  let  cleanAPI = apiResponse.replace(/\s+/g, " ").trim()

//  console.log(cleanAPI)

//  let Nana = cleanAPI.match(/AccEsS_\d\d/g)

//  console.log(Nana)

//  let Maan = cleanAPI.match(/\err/gi)

//  console.log(Maan)

//  let Bann = cleanAPI.match(/[^\w\s]/g)

//  console.log(Bann)

//----------------------------------------------------------------------//

let blackBox = "  User:_Yassir_2026!  Code:[#99-TX]  Date:2026/03/14  Status:__Active__  ";

let mamaCoco = blackBox.replace(/\s/g, "")

console.log(mamaCoco)

let babaCoco = mamaCoco.match(/Yassir\w+/g)

console.log(babaCoco)

let babyCoco = blackBox.match(/#\w+\W\w+/gi)

console.log(babyCoco)

let sisterCoco = blackBox.match(/[^\w\s]/g)

console.log(sisterCoco)

//-------------------------------------------------------------------//

const rawData = "Codes: VIP123, NEW456! #PRO789  _BAD111 FAK222_ _BUG333_  superVIP123  NEW4567";

let final = rawData.match(/\b[A-Z][A-Z][A-Z]\d\d\d\b/g)//take 1 hour 
console.log(final)