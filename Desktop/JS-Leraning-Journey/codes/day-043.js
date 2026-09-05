// let b = "I am the best programmer";

// console.log(b.includes("am", 66))//did we have the index ?

// console.log(b.startsWith("",5))//if index start from the string 

// console.log(b.endsWith("b",10))//here it's teek the (lenthg)

//--------------------------------------------------------------//

// let userBio = null; 

// // the strings is obje null it's mine undefind (nothings) how you what things ? for this the sistem will breakdown
// if (userBio.includes("Developer")) {
//     console.log("Found");//عندما نعمل استدعاء لدالة لا تحتوي على شيئ حرفيا النظام سوف ينهار لهذا يجب الحذر
// }//Output : Erorr

/////***********************************************************/////

// let userBio = null;

//for fix this problem we us (?)like save function we will have nothing actully because output is nothing = null but the sistem will never breakdown 

// if (userBio?.includes("Developer")) {
//     console.log("Found");
// //لحل المشكلة وضعنا اشارة الأستفهام تعمل مثل الدرع لا تظهر نتيجة السبب انه نتيجة هيا اصلا لا شيئ ولكن النظام ما ذال يعمل 
// }
//Output : undefind
//--------------------------------------------------------------//

// let email = "Majd@Gmail.com";
// let search = "gmail";//the same problem in yestrday the small letters and big letters

// console.log(email.includes(search));//نفس مشكلة البارحة الأحرف الكبيرة و الأحرف الصغيرة

//Output : false
/////***********************************************************/////

//we fix how we know be (toLowercase = small letter) 

let email = "Majd@Gmail.com";
let search = "gmail";
console.log(email.toLowerCase().includes(search.toLowerCase()));

//حللنا المشكلة بي دالة الأحرف الصغيرة كما نعرفها 

//Output : true

//--------------------------------------------------------------//

// let company = "Google";//actully here the number after le is be like secateurs not like index how we know remeber (endwith()) it's (lenght)

// console.log(company.endsWith("le", 4));//في الواقع هنا الرقم بعد تحديد النهاية اتى بمعنى مقص وليش نهاية السطر السبب ان نهاية هذه الدالة تختلف عن اقرانها 

//Output : false

/////**************************************************************/////


let company = "Google";//هنا ازلنا الرقم بسبب ان نستخدم الدال المتطرفة 

console.log(company.endsWith("le"));//here we fix the problem be removed the number because we using the endwith() fuciton 

//Output : true

//--------------------------------------------------------------//

// //the new way and old way 

// // old way : 

// if (text.indexOf("Admin") !== -1) {dhh}

// //new way : 

// // Modern Syntax
// if (text.includes("Admin")) {dhh}//delet number it's too easy 

// /////**************************************************************/////

// // old way : 

// if (text.indexOf("https") === 0) {dhh}

// // new way : 

// if (text.startsWith("https")) {dhh}

// /////**************************************************************/////

// // old way :

// if (text.indexOf(".com", text.length - ".com".length) !== -1) {dhh}

// // new way : 

// if (text.endsWith(".com")) {dhh}// thanks god for endwith()

// //--------------------------------------------------------------//

console.log(10 === 10);

console.log(10 !== 10);

console.log(typeof "Rama " === typeof "Manar")

//--------------------------------------------------------------//

