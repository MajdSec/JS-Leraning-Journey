//Date and time (perfor/get/setUTC)

const start = performance.now();

let getDate = new Date();

let yearUTc = getDate.getUTCFullYear();

let dayUTc = getDate.getUTCDate();

for (i = 0; i < 1000000; i++) {}

const end = performance.now();

let Total = end - start;

console.log("Backup Date (UTC): " + yearUTc + "-" + dayUTc);
console.log("Backup Duration (ms): " + Total);

//------------------------------------------------------//

const startCH = performance.now();

let invoiceDate = new Date(2026, 3, 18, 10, 0, 0);

let today = new Date();

let dayUTC = today.getUTCDate();

let houseUTC = today.getUTCHours();

let diffInMs = today - invoiceDate;
let daysPassed = diffInMs / (1000 * 60 * 60 * 24);
daysPassed = Math.floor(daysPassed);

if (daysPassed <= 7) {
  console.log("Decision: Refund Approved. Within 1 week limit.");
} else {
  console.log("Decision: Refund Denied. Time limit exceeded.");
}

const EndCh = performance.now();

let III = EndCh - startCH;

console.log("Days Passed Since Invoice: " + daysPassed);
console.log("Processed on (UTC Day/Hour): " + dayUTC + "__" + houseUTC);
console.log("Server Speed (ms): " + III);

//------------------------------------------------------//

const startConnect = performance.now();

let staking = new Date(2026, 2, 20, 12, 0, 0);

let timeZoon = new Date();

let dayTimeZoon = timeZoon.getUTCDate();

let mountTimeZoon = timeZoon.getUTCMonth();

let diff = timeZoon - staking;
let dayPass = diff / (1000 * 60 * 60 * 24);
dayPass = Math.floor(dayPass);

if (dayPass >= 30) {
  console.log("Withdrawal Status: APPROVED. Funds released.");
} else {
  console.log("Withdrawal Status: DENIED. Lock-in period active.");
}

const endConnect = performance.now();

let totalWaitTime = endConnect - startConnect;

console.log("Staking Days Elapsed: " + dayPass);
console.log(
  "Transaction Attempt (UTC Month-Day): " + dayTimeZoon + "_" + mountTimeZoon,
);
console.log("Engine Execution Time (ms): " + totalWaitTime);

// //-------------------------------------------------------------------//

const startConnect1 = performance.now();

let timeDate = new Date(2026, 3, 27, 8, 0, 0);

let timePass = new Date();

let hoursPass = timePass.getUTCHours()

timeHoursPass = timePass - timeDate
dya = timeHoursPass / (1000 * 60 * 60)
dya = Math.floor(dya)

if (dya < 12){
    console.log("Cache Status: FRESH. Serving data.")
}else{
    console.log("Cache Status: STALE. Deleting data.")
}

const endConnect1 = performance.now()

let perfor = endConnect1 - startConnect1

console.log("Execution Time (ms): " + perfor)
console.log(dya)
console.log("Cache Age (Hours): " + hoursPass)

// //-------------------------------------------------------------------//
