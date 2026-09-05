// //Json 

// let storeData = `[
//   {
//     "id": 101,
//     "title": "Laptop",
//     "price": 1000,
//     "specs": {
//       "ram": "8GB",
//       "storage": "256GB"
//     }
//   },
//   {
//     "id": 102,
//     "title": "Mouse",
//     "price": 50,
//     "tags": ["wireless", "gaming"]
//   },
//   {
//     "id": 103,
//     "title": "Keyboard",
//     "price": 100,
//     "isActive": false
//   }
// ]`;

// let Nasa = JSON.parse(storeData)

// Nasa[0].specs.ram = Nasa[0].specs.ram = "16GB"

// Nasa[0].price = Nasa[0].price + 200

// Nasa[1].price = Nasa[1].price / 2

// Nasa[1].tags.push("discounted")

// Nasa[2].isActive = true

// JSON.stringify(storeData)

// console.log(Nasa)

// //--------------------------------------------//

// let economyData = `{
//   "season": "Winter",
//   "taxRate": 0.10,
//   "players": [
//     {
//       "username": "Trader_1",
//       "funds": 5000,
//       "assets": {
//         "realEstate": 1,
//         "crypto": 0.5
//       },
//       "history": ["buy_crypto"]
//     },
//     {
//       "username": "Trader_2",
//       "funds": 3000,
//       "assets": {
//         "realEstate": 0,
//         "crypto": 2.0
//       },
//       "history": []
//     }
//   ]
// }`;

// let Masa = JSON.parse(economyData);

// Masa.season = "Spring";
// Masa.taxRate = 0.15;

// Masa.players[0].assets.realEstate = Masa.players[0].assets.realEstate + 1;
// Masa.players[0].funds = Masa.players[0].funds - 1000;
// Masa.players[0].history.push("buy_realEstate");
// Masa.players[1].funds = Masa.players[1].funds * 0.85;

// let updatedEconomyJSON = JSON.stringify(Masa);
// console.log(updatedEconomyJSON);

// //-----------------------------------------------------------//

let systemLogs = `{
  "botVersion": "v1.0.0",
  "globalStats": {
    "totalMessages": 5000,
    "uptimeHours": 120
  },
  "activeGuilds": [
    {
      "guildId": "G_001",
      "name": "Developers Lounge",
      "members": 150,
      "features": ["welcome_msgs", "anti_spam"]
    },
    {
      "guildId": "G_002",
      "name": "Gaming Hub",
      "members": 50,
      "features": ["music"]
    }
  ]
}`;

let dashboard = JSON.parse(systemLogs)

dashboard.botVersion = "v2.0.0"

dashboard.globalStats.totalMessages = dashboard.globalStats.totalMessages + 250

dashboard.activeGuilds[0].features.push("auto_mod")

dashboard.activeGuilds[1].members = dashboard.activeGuilds[1].members + 20

dashboard.activeGuilds[1].features[0] = "music_disabled"

let finalDashborad = JSON.stringify(dashboard)

console.log(finalDashborad)

//------------------------------------------------------------//





