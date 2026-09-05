// let checkVPN = new Promise((resolve, reject) => {
//   setTimeout(() => reject("ooon ooon"),2000);
// });

// async function runSecurityProtocol() {
//   try {
//     console.log(await checkVPN);
//   } catch (error) {
//     console.error("Erorr");
//   }
// }
// runSecurityProtocol()

// //------------------------------------------------------//

// let fetchNYSE = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("New york Data succ"),3000);
// });

// let fetchNASDAQ = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Nasdak Data succ"),2000);
// });

// async function collectMarketData () {
//   try {
//     console.log(await Promise.all([fetchNASDAQ ,fetchNYSE]));
//   } catch (error) {
//     console.error("Erorr");
//   }
// }
// collectMarketData()

//------------------------------------------------------------//

// let login = (userName) => {
//   return new Promise((resolve, reject) => {
//     if (userName === "admin") {
//       resolve("Hello boss");
//     } else {
//       reject("ha ha ha try again but by more smart khkhkh");
//     }
//   });
// };

// let getSecretData = (token) => {
//   return new Promise((resolve, reject) => {
//     if (token === "555") {
//       resolve("123456789");
//     } else {
//       reject("try again khkhkh");
//     }
//   });
// };

// async function exeuteHack() {
//   try {
//     console.log(await login("admin"));
//     console.log(await getSecretData(""));
//   } catch (error) {
//     console.error("Error");
//   }
// }
// exeuteHack();

//------------------------------------------------------------//

let hackFirewall = (power) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (power >= 10) {
        resolve("GHOST_TOKEN");
      } else {
        reject("Firewall Block: Power too low!");
      }
    }, 1000);
  });
};

let pullCIAData = (token) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "GHOST_TOKEN") {
        resolve("WEF Global Risk Report Secured");
      } else {
        reject("CIA Geopolitical Analysis Secured");
      }
    }, 2000);
  });
};

let pullWEFData = (token) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "GHOST_TOKEN") {
        resolve("WEF Global Risk Report Secured");
      } else {
        reject("WEF Security: Invalid Token");
      }
    }, 2000);
  });
};

let globalTrace = new Promise((resolve, reject) =>
  setTimeout(
    () => reject("LOCKDOWN: You have been traced! FBI is on the way"),
    3500,
  ),
);

globalTrace.catch(() => {});

async function executeGrandHeist() {
  try {
    let myToken = await hackFirewall(15);
    let doubleStrike = Promise.all([
      pullCIAData(myToken),
      pullWEFData(myToken),
    ]);
    let finalResult = await Promise.race([doubleStrike, globalTrace]);

    console.log(finalResult);
  } catch (error) {
    console.error(error);
  }
}

executeGrandHeist();

//----------------------------------------------------------------//

//Name: {UnhandledPromiseRejection}

//المشكلة (Arabic): الوعد الفائز في حلبة Promise.race أنهى عمله وأغلق غرفة الـ try/catch مبكراً. عندما انفجر فخ التتبع (reject) متأخراً، لم يجد من يلتقطه، فغضب سيرفر Node.js وأوقف النظام.

//The Problem (English): The winning promise in Promise.race finished and closed the try/catch block early. When the delayed tracker trap rejected later, there was no catch block left to handle it, causing Node.js to crash.

//الحل (Arabic): وضع "كاتم صوت" للوعد المتأخر ليتجاهل الخطأ في الخلفية بصمت.

//The Solution (English): Attach a silent error handler to the delayed promise to ignore the error in the background.

//الكود / Code: ```javascript
//globalTrace.catch(() => {});
