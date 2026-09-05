// //Regular EXpressions

// let scrapedData = "Contact us at INFO@domain.com, or info@domain.com, or InFo@domain.com";

// let test1 = scrapedData.match(/info/);

// let test2 = scrapedData.match(/info/i);

// let finalResult = scrapedData.match(/info/ig);

// console.log(finalResult, test1, test2)

//-------------------------------------------------------------//

// let serverLog = "System is running. error at port 80. No ERROR on port 443. Minor ErRoR ignored. Fatal error system crash.";

// let Part1 = serverLog.match(/error/i)small and big litter

// let Part2 = serverLog.match(/error/g)//All word in array

// let Part3 = serverLog.match(/error/gi)

// console.log(Part3.length)

//-------------------------------------------------------------//

// let leakedLog = "Warning: token exposed. Please reset your ToKeN immediately. User TOKEN is invalid. backup_tOkEn failed.";

// let stolenWords = leakedLog.match(/token/ig)

// console.log(stolenWords.length)

// let securedlog = leakedLog.replace(stolenWords , "****")//we replace the token word to ****

// console.log(securedlog)

//-------------------------------------------------------------//
let serverLogs = new Map();
let botOne = { id: "Scraper_Alpha" };
let botTwo = { id: "Scraper_Beta" };
serverLogs.set(
  botOne,
  "Critical eRrOr: DB failed. user PaSsWord is 1234. error at port 80.",
);
serverLogs.set(
  botTwo,
  "Connection ok. PASSword leaked. system ErRor. No pAssWORD.",
);

let dirtyLog = serverLogs.get(botOne);
let cleanLog = dirtyLog.replace(/password/gi, "HIDDEN");
serverLogs.set(botOne, cleanLog);

let botTwoLog = serverLogs.get(botTwo);
let errorCount = botTwoLog.match(/error/gi);
console.log(errorCount.length);

let fakeBot = { id: "Scraper_Alpha" };
console.log(serverLogs.get(fakeBot));
console.log(serverLogs);

