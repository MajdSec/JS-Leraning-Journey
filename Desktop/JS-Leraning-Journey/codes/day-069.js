//Map data type

// let  map = new Map()//it same set but for key/value(Object)
// map.set("google.com", 500)//we add like key in first / value in second
// map.get("google.com")//we can search more then element in same time
// map.has("google.com")
// map.delete("google.com")
// map.size

//-------------------------------------------------------------//

// let botControlRoom = new Map()

// let botAlpha = {id: "scraper_A"};

// botControlRoom.set(botAlpha ,"Running");

// botControlRoom.set("Total_Data", 5000);

// console.log(botControlRoom.has("Total_Data"));

// console.log(botControlRoom.get("botAlpha"));

// console.log(botControlRoom.set(botAlpha, "paused"));

// console.log(botControlRoom.delete("Total_Data"));

// console.log(botControlRoom.size)

// botControlRoom.clear()

// console.log(botControlRoom)

//-------------------------------------------------------------//

let netWorkMonitor = new Map();

let serverA = { ip: "192.168.1.10", role: "Scraper" };

let serverB = { ip: "192.168.1.20", role: "Analyzer" };

console.log(netWorkMonitor.set(serverA, "Connected"));

console.log(netWorkMonitor.set(serverB, "Waiting"));

console.log(netWorkMonitor.set(serverA, "Disconnected"));

let fakeServer = { ip: "192.168.1.10", role: "Scraper" };

console.log(netWorkMonitor.get(fakeServer));

console.log(netWorkMonitor.size);
