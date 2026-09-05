// const requestDate = new Date("2026-04-19");

// requestDate.getDate(requestDate.getDate() + 7);

// let deadlineDay = requestDate.getDate();

// let formattedDate = requestDate.toDateString();

// console.log("Expected Refund Day Number: " + deadlineDay);
// console.log("Final Deadline Date: " + formattedDate);

//------------------------------------------------------------//

const propagationDate = new Date("2026-04-20");

propagationDate.setDate(propagationDate.getDate() + 14);

const inspectionMonth = propagationDate.getMonth() + 1;

const formattedReminder = propagationDate.toDateString();

console.log("Next Root Inspection: " + formattedReminder);
console.log("Month Number: " + inspectionMonth);

//------------------------------------------------------------//

let supDate = new Date("2026-01-10");

supDate.setMonth(supDate.getMonth() + 6);

let NN = supDate.toDateString();

console.log("the new Date is " + NN);

//------------------------------------------------------------//

let aiDate = new Date("2026-04-26T12:00:00");

aiDate.setHours(aiDate.getHours() + 4);

let MM = aiDate.toLocaleString();

console.log("the Final time is " + MM);

//-------------------------------------------------------------//

let movieDate = new Date("2026-05-01");

movieDate.setMonth(movieDate.getMonth() + 2);

movieDate.setDate(movieDate.getDate() + 10);

let AA = movieDate.toDateString();

console.log("the Final time is " + AA);

//-------------------------------------------------------------//

let studySession = new Date(2026, 9, 10, 9, 0, 0);

studySession.setMinutes(studySession.getMinutes() + 90);

let sessionID = studySession.getTime();

let readableFinalTime = studySession.toLocaleString();

console.log("the Final time is" + sessionID);
console.log("The study session will end at: " + readableFinalTime);

//-------------------------------------------------------------//

let launchDate = new Date(2026, 11, 20, 2, 30, 0);

launchDate.setDate(launchDate.getDate() + 5);

launchDate.setHours(launchDate.getHours() + 12);

launchDate.setMinutes(launchDate.getMinutes() + 45);

let timeStamp = launchDate.getTime();

let localTime = launchDate.toLocaleString();

console.log("Deployment ID: " + timeStamp);
console.log("The study session will end at: " + localTime);

//-------------------------------------------------------------//

let now = new Date(2026, 3, 26, 5, 0, 0)

now.setDate(now.getDate() - 10)
now.setHours(now.getHours() - 8)

let timeNow = now.toLocaleString()

let hackDay = now.getDay()

let Timestamp = now.getTime()

console.log("The Hack started on (Full Date): " + timeNow)
console.log("Day of the week number (0-6): " + hackDay)
console.log("Security Reference ID: " + Timestamp)


//-------------------------------------------------------------//

