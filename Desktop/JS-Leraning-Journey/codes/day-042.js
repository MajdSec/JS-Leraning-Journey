// let theName = "  Ahemd  ";

// console.log(theName)

// console.log(theName.trim())//to clean the function 

// console.log(theName.toUpperCase())//to make the big letters

// console.log(theName.toLowerCase())//to make the small letters 

// console.log(theName.charAt(3))//to serach 

// //-----------------------------------------------------------------//

// let email = "  majd@gmail.com  ";
// email.trim(); // here we will clean the strings but we will keep the dirty string 
// console.log(email); //سوف ينظف ولكن سوف يبقى الكود المتسخ او الاصلي

// /////*********************************************************************/////

// email = email.trim();// here we solving this problem we make new variable

// //---------------------------------------------------------------------//

// // let price = null; //if we don't have string how clean it ?
// // let cleanPrice = price.trim(); 

// /////*********************************************************************/////

// // //here we ask did we have variable before clean it
// // let cleanPrice = price ? price.trim() : "we don't have value"

// //--------------------------------------------------------------------//

// //the ps will never no difference between small and big letters and this is problem 
// let domain = "GOOGLE.COM";
// if (domain === "google.com") { 
//     console.log("take them");//الكود لا يفرق بين الأحرف الكبيرة و الصغيرة 
// }
// /////*********************************************************************/////

// //here we give have something to thing about if the value like this do it 
// if (domain.toLowerCase() === "google.com") {
//     console.log("Take them");//هنا اعطيني شرط للتنفيذ 
// }

// //--------------------------------------------------------------------//

// let companyName = "  Google      Inc  ";
// //actually trim() we help as to clean spaces but like this condition is difference 
// let cleanName = companyName.trim();

// console.log(cleanName); 

// /////*********************************************************************/////

// let superClean = companyName.trim().replace(/\s+/g, " "); 
// //actully here we using replace it's like trim() but replace it work one time if we want it to work more we using replaceAll
// console.log(superClean); 

// //--------------------------------------------------------------------//

// // old way and new way

// trim()

// //we have 3 type

// let data = "   Price: 50$   ";

// console.log(data.trim());      // "Price: 50$" (نظيف تماماً) full clean
// console.log(data.trimStart()); // "Price: 50$   " (ترك مسافة النهاية) clean end
// console.log(data.trimEnd());   // "   Price: 50$" (ترك مسافة البداية) clean start

// //to small/big letter

// //actully it's same 

// toLowerCase() //small 

// toUpperCase() //big

//--------------------------------------------------------------------//

let a = "I am the best";

console.log(a.indexOf("the"));//for search in strings were the point we what 

console.log(a.indexOf("the", 9));// when we serach after the string we typed we give as -1

console.log(a.lastIndexOf("m", 9));//serach about last string from first actully :)

//--------------------------------------------------------------------//

// let website = "Google.com";

// if (website.indexOf("Google")) {
//     console.log("This is Google");
// } else {//actully here will give as not google because if you remeber 0=false 1=true
//     console.log("Not Google"); //فلواقع هنا سوف يعطيني لا غوغل السبب ان صفر في البرمجة يعني خطأ و نحن هنا نستخدم الحلقات لهذا يجب تركيز على هذه المشكلة 
// }

/////*********************************************************************/////

let website = "Google.com";
//to solving this problem we using -1 instead of 0
if (website.indexOf("Google") !== -1) {
    console.log("This is Google");
}//لحل هذه المشكلة نضع بدل 0 رقم -1

//--------------------------------------------------------------------//

// let text = "Best price for you";
// //the output -1??? because the pc never no difference between small and big letters p/P
// console.log(text.indexOf("Price")); 
// //الناتج سوف يكون -1 السبب مثل ما اخبرنا من قبل الجهاز لا يفرق بين احرف كبيرة و صغيرة 

/////*********************************************************************/////

//here we using again the toLowerCase to force pc to do output will be 5
let text = "Best price for you";

console.log(text.toLowerCase().indexOf("price"));
//لهذا نستخدم دالة تحديد نوع الحرف 

//--------------------------------------------------------------------//

// let msg = "Hello World Hello";
// //will give as 0 because when we what 5 number or inkind of string we have to add more number 5 = 6
// console.log(msg.lastIndexOf("Hello", 5));
// // النتيجة: 0 وجد الأولى فقط ولم يصل للثانية السبب اذا كنا نريد قيمة معينة يجب اضافة القيمة التي بعدها لضمان الفيمة المطلوبة بمعنى حرف في النهاية دائما غير مستعمل 

/////*********************************************************************/////

let msg = "Hello World Hello";
//we solving be have more number or spaces (almost)
console.log(msg.lastIndexOf("Hello"));
// الحل هو زيادة العدد دائما 

//--------------------------------------------------------------------//

// old way and new 

// old way :

console.log(msg.lastIndexOf("Hello"));

console.log(msg.indexOf("price"));

//new way :

//change to find last/index() 

console.log(msg.findLastIndex("Hello"));

console.log(msg.findIndex("Hello"));