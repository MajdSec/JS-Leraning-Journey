// Generator

const backupFiles = ["DB_2024.sql", "DB_2025.sql", "DB_2026.sql"];

function* downloadManager(filesArray) {
  for (let i = 0; i < filesArray.length; i++) {
    yield filesArray[i];
  }
}

const startDownload = downloadManager(backupFiles);

console.log("Downloading First File: " + startDownload.next().value);

console.log("Downloading Second File: " + startDownload.next().value);

console.log("Downloading Third File: " + startDownload.next().value);

//----------------------------------------------------------------------//

function* ticketMachine() {
  let ticketNumber = 1;

  while (true) {
    yield ticketNumber;
    ticketNumber++;
  }
}
let getTicket = ticketMachine();

console.log("Customer 1 Ticket ID: #" + getTicket.next().value);
console.log("Customer 2 Ticket ID: #" + getTicket.next().value);
console.log("Customer 3 Ticket ID: #" + getTicket.next().value);
console.log("Customer 4 Ticket ID: #" + getTicket.next().value);

//----------------------------------------------------------------------//

const tempReadings = [85, 92, 105, 70, 60];

function* IOF() {
  for (let i = 0; i < tempReadings.length; i++) {
    if (tempReadings[i] < 100) {
      yield tempReadings[i];
    } else {
      return "CRITICAL DANGER: SYSTEM HALTED";
    }
  }
}

let smo = IOF();

console.log("Reading 1: " + smo.next().value);
console.log("Reading 2: " + smo.next().value);
console.log("Reading 3: " + smo.next().value);
console.log("Reading 4: " + smo.next().value);

//----------------------------------------------------------------------//

function* ramMonitor() {
  while (true) {
    let load = yield "waiting Messaj";
    if (load < 80) {
      yield "work";
    } else {
      return "noooo stop";
    }
  }
}

let nmo = ramMonitor();

let monitor = ramMonitor();

console.log("Step 1 (System): " + monitor.next().value);
console.log("Step 2 (Response): " + monitor.next(45).value);
console.log("Step 3 (System): " + monitor.next().value);
console.log("Step 4 (Response): " + monitor.next(85).value);
console.log("Step 5 (System): " + monitor.next().value);

//----------------------------------------------------------------------//
