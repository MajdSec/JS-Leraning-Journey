// window.open()
// //open new window in new page

// location.href()
// //move to next page

// //we using forEach to make a lot of oprations

//----------------------------------------------------------//

// let requestsCount = 0;

// let pricetsCount = setInterval(()=> {//for make forever timer

// ++requestsCount;

// console.log(`jari fahs alsair : ${requestsCount}`)

// if(requestsCount === 4){

//     console.log("tm arsal 4 talabat binjah tokf")
// clearInterval(pricetsCount) //we have to stop it because is deffirent settimeOut this will work forever if don't stop it
// }
// },1000);

//----------------------------------------------------------//

// let clicks = 0;

// let scrolltat = setInterval(() => {
//   ++clicks;
//   console.log(`tam taht ala alzer almzed taht rakam : ${clicks}`);
//   if (clicks === 3) {
//     console.log("tm tahmil alsafha almtloba stop");

//     clearInterval(scrolltat);
//   }
// }, 1000);

// //-------------------------------------------------//

// let sse = 0;

// let Marrt = setInterval= () => {
//   if (sse === 5) {console.log("lakd antaha alamalia ");
// return;}
//   ++sse;
//   console.log(`tam taht ala alzer almzed taht rakam : ${sse}`);

//   let Randwom = Math.floor(Math.random() * 3000) + 1000;
//   console.log(`sof ontazer ${Randwom}`);

//   setTimeout(Marrt, Randwom); 
// };
// Marrt()

//------------------------------------------------------//

let rawData = [
    "   info@company1.com  ",
    "  sales@company2.com",
    "contact@company3.com   "
];

let cleanDatabase = []; 
let currentIndex = 0;

const dataCleanerBot = () => {
    
    if (currentIndex === rawData.length) {
        console.log("");
        console.log(cleanDatabase);
        return;//stop function
    }
    let currentEmail = rawData[currentIndex]; 
    let cleanedEmail = currentEmail.trim();   //clean spaces
    
    cleanDatabase.push(cleanedEmail);//add data
    
    console.log(`${currentIndex + 1}`);// add succful data 

    currentIndex++;//keep go 

    let Rer = Math.floor(Math.random() * 2000) + 1000;//random time between the opreation 
    setTimeout(dataCleanerBot, Rer);
};

// تشغيل المحرك
dataCleanerBot();