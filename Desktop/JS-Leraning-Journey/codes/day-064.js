// //Destructuring Object 

// //old way 

// let user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt"
// };

// // let theName = user.theName;
// // let theAge = user.theAge;
// // let theTitle = user.theTitle;
// // let theCountry = user.theCountry;

// //new way 

// // console.log(theName, theAge, theTitle, theCountry);

// let { theName, theAge, theTitle, theCountry } = user;

// console.log(theName, theAge, theTitle, theCountry);

// //-----------------------------------------------------------//

// const product = {
//   item_id: 404,
//   item_title: "Mechanical Keyboard"
// };

// ({item_id , item_title : productName ,discount = 0} = product)//for change element : 

//  console.log(item_id, productName, discount);

// //-----------------------------------------------------------//

// const serverConfig = {
//   port: 8080,
//   database: {
//     dbName: "users_db",
//     host: "localhost"
//   }
// };

// ({port, database : {dbName} } = serverConfig)// : same symbol for change element and call it (with {})

// console.log(port, dbName);

// //-----------------------------------------------------------//

// const userProfile = {
//   username: "Majd_Engineer",
//   email: "majd@server.com",
//   age: 25,
//   country: "Türkiye",
//   role: "Admin"
// };

// ({username, email,...others} = userProfile)//to make new object = ... (because we are in object using ... but the normal is (...))


// console.log(username)
// console.log(email)
// console.log(others)

//-----------------------------------------------------------//

const playerRecord = {
  p_id: 1024,
  p_nick: "NightHawk"
  
};

let {p_id : id , p_nick : username , rank = "bronz"} = playerRecord

console.log(id, username, rank)

//-----------------------------------------------------------//

const financialTransaction = {
  receiptNo: "TX-999",
  details: {
    currency: "USD",//her the trip I was call currency and I was want amounts soo don't forgit
    amounts: {
      net: 5000,
      tax: 250
    }
  }
};

let {receiptNo, details : {amounts : {net : netProfit }}} = financialTransaction


 console.log(receiptNo, netProfit);

//-----------------------------------------------------------//

const systemLog = {
  logId: 404,
  severity: "CRITICAL",
  timestamp: "2026-03-04",
  ipAddress: "192.168.1.1",
  errorMessage: "Database timeout"
};

const {logId, severity,...technicalDetails } = systemLog


 console.log(severity)
 console.log(technicalDetails); 

 //if we want to edit some varibles object we using = () if we have the varibles of curs 
 //if we want to make new varibles object we using = const/ let for save new ones 
 //just for remember