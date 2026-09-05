// // const chars = ["H", "e", "l", "l", "o"];

// // When we forget ("")=>space Output : H,e,l,l,o

// // console.log(chars.join()); 

// // H,e,l,l,o : هنا نسينا وضع ("") التي تعبر مسافة تلغي الفاصلة الأجبارية  الناتج  

// /////************************************************************/////

// const chars = ["H", "e", "l", "l", "o"];

// //when we usıng ("")=>space Output : Hello 

// console.log(chars.join("")); 

// //  ("") عند استخدام  Hello : ناتج 

// //----------------------------------------------------------------------//

// // const team = ["Ali", "Yassir"];

// // //Error join() for show the strings the modification it must be before 
// // const teamString = team.join(" - "); 

// // teamString.push("Sara"); 

// //  Output :  teamString.push is not a function
// //  عبارة عن مظهر نصوص لا يمكن تعديل اثناء وجودها تعديل  يكون قبل الطباعة  joın() نتيجة خطأ السبب ان 

// //-----------------------------------------------------------------------//

// const data = ["User", null, "Admin"];

// console.log(data.join(" - "));
// //null it's null :)

// // Output: "User - - Admin" 

// //الفارغ يبقى فارغ الناتج سوف يكون كارثة 

// /////***********************************************************/////

// // we using thing like filter {filter(Boolean)}

// let userData = ["Yassir", "", "Ali"];

// // 
// let cleanData = userData.filter(Boolean); 

// console.log(cleanData.join(" - "));

// //لهاذا يجب فلترت النصوص عن الفراغات عن طريق دالة معينة 
// //Output : Yassir - Ali

// //-------------------------------------------------------------------------//

// //New way for type join() :

// const result = `${g}`;

// //----------------------------------------------------------------------//

// // const food = ["Burger", "Pizza", "Rice", "Salad"];
// // // Indices:      0         1        2        3

// // const myPlate = food.slice(0, 2);

// // console.log(myPlate);
// // // Output: ["Burger", "Pizza"] 
// // //سبب عدم عدد القيمة 2 هيا ان رقم بتوقف عدد القيمة 

// /////***************************************************************/////

// const myPlate = food.slice(0, 3);

// //just we have to add number after last number

// console.log(myPlate);
// // Output: ["Burger", "Pizza", "Rice"]
// //نحن هنا حللنا المشكلة بأضافة رقم بعد الرقم الأخير ليتوقف عنده

// //------------------------------------------------------------------------//

// const numbers = [10, 20, 30, 40, 50];

// //you don't to start counting from the beginning you can count from the end but remeber when we start in end we start from -1 not 0
// const lastTwo = numbers.slice(-2);

// console.log(lastTwo); 
// // Output : [40, 50]
// //لا نحتاج العدد من البداية للنهاية فقط نعد بسالب من الخلف الى الأمام ولكن يجب ان لا ننسى ان العد يبدء من سالب واحد وليس صفر 

// //-------------------------------------------------------------------------------//

// // a lot of programmers mistake between slice and splice 

// //### slice it's give as the result and keep the original array save 

// //### splice it's give us same thing but the problem her is  delete the original array and just keep the result

// //------------------------------------------------------------------------------------------------//


// //New syntax & old syntax

// //for take copy :

// //*****//the old 

// // const original = [1, 2, 3];
// // const copy = original.slice(); 

// //*****//the new

// // const original = [1, 2, 3];
// // const copy = [...original]; 

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-//

// //for cutting(almost) :

// //*****//the old 

// // const users = ["Admin", "User1", "User2"];
// // const admin = users[0];
// // const others = users.slice(1); 

// //*****//the new

// // const users = ["Admin", "User1", "User2"];

// // const [admin, ...others] = users; 

// // console.log(others); 

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-//

// // for the last item :

// //*****//the old 

// // const items = ["A", "B", "C"];
// // const last = items.slice(-1)[0];

// //*****//the new

// // const items = ["A", "B", "C"];
// // const last = items.at(-1); 

// //-----------------------------------------------------------------//
