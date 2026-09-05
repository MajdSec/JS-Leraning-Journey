// cehckAge((age) => {
//   return new Promise((reject, resolve) => {
//     setTimeout(() => {
//       if (age >= 18) {
//         resolve("agree");
//       } else {
//         reject("null");
//       }
//     }, 2000);
//   });
// });
// cehckAge(20)
//   .then((resolve) => {
//     console.log("agree with" + resolve);
//   })
//   .catch((error) => {
//     console.error("null with" + error);
//   })
//   .finally(() => {
//     console.log("finally")
//   });

//----------------------------------------------------//

// let serverStatus = "online";

// let checkBotServer = new Promise((resolve, reject) => {
//   if (serverStatus === "online") {
//     resolve("done");
//   } else {
//     reject("faild");
//   }
// });

// checkBotServer
//   .then((message) => {
//     console.log("it's " + message);
//   })
//   .catch((error) => {
//     console.log("it's " + error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

//----------------------------------------------------//

// // 1. تعريف الدالة بشكل صحيح
// function registerCourse(courseName, studentLevel) {
//   return new Promise((resolve, reject) => {
//     // 2. المؤقت الزمني يغلق في الأسفل مع الـ 2000
//     setTimeout(() => {
//       // الشرط الأول: المادة جافاسكريبت والمستوى 2 أو أعلى
//       if (courseName === "javaScript" && studentLevel >= 2) {
//         resolve("the work done");
//       }
//       // الشرط الثاني: المادة جافاسكريبت بس المستوى أقل من 2
//       else if (courseName === "javaScript" && studentLevel < 2) {
//         reject("the work not done hahahah");
//       }
//       // الشرط الثالث: أي مادة أخرى
//       else {
//         reject("never done because I teird khkhkh");
//       }
//     }, 2000); // <-- هنا المكان الصحيح للـ 2000
//   });
// }

// // 3. التشغيل والاستقبال
// registerCourse("javaScript", 2)
//   .then((msms) => {
//     console.log("succ: " + msms);
//   })
//   .catch((error) => {
//     console.error("Fail: " + error);
//   });

// //----------------------------------------------------//

// let unlockDoor = (password, fingerprint) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (fingerprint === false) {
//         reject("it's not you lalalal");
//       } else if (fingerprint === true && password === "HFJ4") {
//         resolve(" yo yo boss");
//       } else {
//         reject("not password");
//       }
//     }, 2000);
//   });
// };

// unlockDoor(("Z3R0", true))
//   .then((myao) => {
//     console.log("succuf" + myao);
//   })
//   .catch((error) => {
//     console.error("faile" + error);
//   });

//--------------------------------------------//

// this function it's realiy hard I will countinue next day

//-----------------------------------------------------//
//Day 89   nothing I fix some problems I my own live
//-----------------------------------------------------//

// let banUser = (role, ruleBroken) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (role === "Admin") {
//         reject("error : it's wrong he's Admin");
//       }
//       if (role === "Member" && ruleBroken === true) {
//         resolve("done : it's true block this one ");
//       } else {
//         if (ruleBroken === "Member" && ruleBroken === false) {
//           reject("Fox : we are dimocrates the block is failed ");
//         }
//       }
//     }, 2000);
//   });
// };

// banUser("Member", true)
//   .then((done) => {
//     console.log(done);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//-------------------------------------------------//

// let checkFirewall = (ipAddress, requestsPerSecond, isBlacklisted) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isBlacklisted === true) {
//         reject("block");
//       } else if (requestsPerSecond > 50) {
//         reject("fox : error in serfer");
//       } else if (requestsPerSecond <= 50 && ipAddress === "192.168.1.1") {
//         resolve("your succ in this time");
//       } else {
//         resolve("hello our user");
//       }
//     }, 4000);
//   });
// };

// checkFirewall("192.168.1.1", 50, true)
//   .then((done) => {
//     console.log(done);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//--------------------------------------------------//

let transferCrypto = (walletAddress, amount, isNetworkSecure) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNetworkSecure === false) {
        reject("page was hacing ");
      } else if (walletAddress === "") {
        reject("you don't have money you poor like me ");
      } else if (amount < 50) {
        reject("for transfer you need 50 and more ");
      } else {
        resolve("the mission succ");
      }
    }, 2000);
  });
};

transferCrypto(0, true)
  .then((done) => {
    console.log(done);
  })
  .catch((error) => {
    console.error(error);
  });

//-----------------------------------------------------//

let rentCar = (driverName, driverAge, hasLicense) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hasLicense === false) {
        reject("you don't have license sorry");
      } else if (driverAge < 18) {//boolean type
        reject("your ander tikar khkhkh sorry your ander 18 sorry ");
      } else if (driverName === "") {
        reject("when I want to call you what call you ? the boss!");
      }else{
        resolve("the mission succ maaaan ")
      }
    }, 2000);
  });
};

rentCar(true
)
.then((done)=>{
  console.log(done)
})
.catch((error)=>{
  console.error(error)
})

//------------------------------------------//

