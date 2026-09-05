// /////////////////////////////////////////////////////////////////////
// ///////////////////////////// Assing Object /////////////////////////////////////
// /////////////////////////////////////////////////////////////////////

// let myTarget = {

//   prop1: 1,
//   meth1: function () {
//     return this.prop1;
//   },
// };

// let mySource1 = {
//   prop2: 2,
//   meth2: function () {
//     return this.prop2;
//   },
// };

// let mySource2 = {
//   prop3: 3,
//   meth3: function () {
//     return this.prop3;
//   },
// };

// Object.assign(myTarget, mySource1, mySource2);

// console.log(myTarget);

// let newObject = Object.assign({}, myTarget, { prop4: 4 });
// console.log(newObject);


//-----------------------------------------------------------//


// let coreInfo = { name: "KillerBot", version: "1.0" };
// let devInfo = { developer: "Yassir" };
// let skills = { scraping: true, automation: true };

// //we concat 3 object inside ones new object

// let superBot = Object.assign(coreInfo, devInfo, skills);

// console.log(superBot);//[{
//   name: 'KillerBot',
//   version: '1.0',
//   developer: 'Yassir',
//   scraping: true,
//   automation: true
// }]


//-----------------------------------------------------------//


// let defaultSettings = { theme: "Dark", lang: "English" };
// let userSettings = { lang: "Arabic" };

// let finalConfig = { ...defaultSettings , ...userSettings}; //just change placess

// console.log(finalConfig.lang);//[Arabic / old: english ]


// //-----------------------------------------------------------//


// let oldConfig = {
//   id: 1,
//   screen: { color: "Red", size: "100px" }
// };

// let newUpdate = {
//   screen: { color: "Blue" }
// };

// let result = {
//   ...oldConfig,

//   screen: {
//     //we change the color but in same time we don't tatch size because we don't more size like color soo server return same one
//     ...oldConfig.screen,
//     ...newUpdate.screen
//   }
// };

// console.log(result.screen); //[{ color: 'Blue', size: '100px' }]


//-----------------------------------------------------------//


let userProfile = {
  username: "User123",
  playlist: ["Song 1", "Song 2"],
};

let newSong = {
  playlist: ["Song 3"],
};

let mays = {
  ...userProfile,

  playlist: [
    ...userProfile.playlist,
    ...newSong.playlist
  ]//we add array inside array and make new array
};

console.log(mays.playlist);//[ 'Song 1', 'Song 2', 'Song 3' ]


//-----------------------------------------------------------//


let playerState = { score: 100, level: 1, health: 100 };

let keyToUpdate = "level"; 
let newValue = 5;        

let updatedPlayer = {

...playerState,

level: {

...playerState,
[keyToUpdate]: newValue//change value 
}
}

console.log(updatedPlayer.level)//{ score: 100, level: 5, health: 100 }



//-----------------------------------------------------------//


let cart = {
  apples: 2,
  bananas: 5
};

let itemToUpdate = "apples"; 
let newQuantity = 10;        

let updatedCart = {

...cart,
[itemToUpdate]: newQuantity//actully the varibaly will change 
}



console.log(updatedCart)//{ apples: 10, bananas: 5 }


//-----------------------------------------------------------//


let basicServer = { port: 8080, status: "offline", region: "US" };
let adminUpdates = { status: "online", port: 443 };

let finalServer = Object.assign({}, basicServer, adminUpdates);

//if we have to varibaly same will change old and using new I understand this after 1.30H but never give up 


console.log(finalServer)//{ port: 443, status: 'online', region: 'US' }


//--------------------------------------------------------------------//


let botUser = { id: 1, isAdmin: false, isBanned: false };

let permissionToChange = "isAdmin"; // 
let newValues = true;              

let updateUser = {

...botUser,

[permissionToChange]:newValues//we need [] for told server we have key or something like this sorry but I traing from since 2H

}

console.log(updateUser)


//------------------------------------------------------------------//