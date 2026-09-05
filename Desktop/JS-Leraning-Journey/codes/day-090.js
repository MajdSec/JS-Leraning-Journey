// // we need to add (catch) like shild from error

// let checkVPN = new Promise((resolve) =>
//   setTimeout(() => resolve("yaaaa"), 1000),
// );
// let checkToken = new Promise((resolve, reject) =>
//   setTimeout(() => reject("no way"), 2000),
// );
// Promise.all([checkToken, checkVPN])
//   .then((resutle) => {
//     console.log(resutle);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// //----------------------------------------------------------------------//

// let nyServer = new Promise((resolve) => resolve("NewYork : work"));
// let txServer = new Promise((resulte, reject) => reject("taxis : Error"));
// let caServer = new Promise((resolve) => resolve("Kalfornya : work"));

// Promise.allSettled([nyServer, txServer, caServer])
//   .then((resulte) => {
//     console.log(resulte);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// //----------------------------------------------------------------------//

// let fetchData = new Promise((resolve) =>
//   setTimeout(() => resolve("We got Data "), 4000),
// );

// let timeOut = new Promise((resolve, reject) =>
//   setTimeout(() => reject("time last "), 2000),
// );

// Promise.race([fetchData, timeOut])
//   .then((resulte) => {
//     console.log(resulte);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// //---------------------------------------------------//

// //resolve inside function / resulte outside = it's stubid note I know

// //--------------------------------------------------//

// const connnectWallStreet = (targetState, portNumber, StealthMode) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (targetState !== "" && portNumber >= 5000 && StealthMode === true) {
//         resolve("succ");
//       } else {
//         reject("Error sistem close");
//       }
//     },5000);
//   });
// };

// let emergencyAbort = new Promise((resolve, reject) => setTimeout(()=> reject("stop time done"),3000))

// Promise.race([connnectWallStreet("NY", 5500, true), emergencyAbort])
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
// console.error(error)
// })

//----------------------------------------------//

let fakeIp = new Promise((resolve) =>
  setTimeout(() => resolve("the Ip changed"), 2000),
);

let crackPassword = (strength) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (strength < 8) {
        reject("Error : password is failed");
      } else {
        resolve("the hack succ");
      }
    }, 2000);
  });
};

Promise.all([crackPassword(9), fakeIp])
  .then((done) => {
    console.log(done);
  })
  .catch((error) => {
    console.error(error);
  });

//----------------------------------------------//

let nyData = new Promise((resolve) => resolve("NewWork Data is succ"));
let londonData = new Promise((resolve, reject) =>
  reject("the london dave it's best :hacking failed"),
);
let tokyData = new Promise((resolve) => resolve("tokyo Data is succ"));

Promise.allSettled([nyData, londonData, tokyData])
  .then((done) => {
    console.log(done);
  })
  .catch((error) => {
    console.error(error);
  });

//---------------------------------------------//

let downloadArchive = new Promise((resolve) =>
  setTimeout(() => resolve("download is done"), 5000),
);

let fbiTrace = new Promise((resolve, reject) =>
  setTimeout(() => reject("Error: we know where are you"), 3000),
);

Promise.race([downloadArchive, fbiTrace])
 .then((done) => {
    console.log(done);
  })
  .catch((error) => {
    console.error(error);
  });









//I want countinue but I have to stude to exam next week soooo goodnight
