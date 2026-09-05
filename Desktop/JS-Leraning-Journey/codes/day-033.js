let myFriends = ["Ahmed", "Sayed"];

let allFriends = myFriends.push("Yassir"); //the push her will add but will give us the total not names

console.log(allFriends); ش
//سوف تكون النتيجة هنا عدد الأسماء وليس اظهار الأسماء بسبب ان انشئنا متغير وليس اضفنا الأسم 

//////*****************************************************************/////

 myFriends = ["Ahmed", "Sayed"];

myFriends.push("Yassir"); // here will give as the names because we push the name for arrya 

console.log(myFriends); 
//هنا تظهر الأسماء لأنه اضفنا الأسم للمخطوطة وهذه الطريقة الصحيحة

//--------------------------------------------------------------------------------//

let groupA = [1, 2];
let groupB = [3, 4];
//it's not one array it's array inside array
groupA.push(groupB); 

console.log(groupA);
// [1, 2, [3, 4] أصبحت مصفوفة داخل مصفوفة، وليست مصفوفة واحدة متصلة نتيجة

/////****************************************************************/////

groupA.push(...groupB); 
//here will give as one array because we push G_A inside G_B in this time we will have one array
console.log(groupA); 
//النتيجة: [1, 2, 3, 4] لأ اضفنا المخطوطة الأولى في الثانية فاصبحت مخطوطة كاملة

//-----------------------------------------------------------------------------------//

let staff2023 = ["Alex", "Sam"];

staff2023.push("John"); // here we will change the original array and we will lose it for ever

console.log(staff2023); 
//سوف نفقد المخطوطة الأصلية ولا تعود كما كانت من قبل 

// /////**************************************************************************/////

const staff2023 = ["Alex", "Sam"];

const staff2024 = [...staff2023, "John"];//here will change but will keep save the original array

console.log(staff2024); 
 // هنا سوف تتغير ولكن سوف نحافظ على الأصلية 

//-----------------------------------------------------------------------------------//

//new way to type array

const mySkills = ["HTML", "CSS"];

// new way to type push 

const newUsers = [...oldUsers, "Yassir"];

//-----------------------------------------------------------------------------------//

const names = ["Ahmed", "Osama", "Sayed"];

const searchInput = "ahmed"; //here will give as false because we have (a/A) the pc read to deffirent string not just one

console.log(names.includes(searchInput)); 
//سوف يعطيني الفيمة الخاطئ بسبب ان لدينا حرف صغير و كبير الفيم تختلف في الفراءة بنسبة للكمبيوتر

/////**********************************************************************************/////

const names = ["Ahmed", "Osama", "Sayed"];
const searchInput = "ahmed"; //here will give as true because we search about string in the array

console.log(names.includes("Ahmed")); 
//هنا يعطينا صحيح لأ نبحث عن نص داخل مصفوصة

//-----------------------------------------------------------------------------------//

const salaries = [1000, 2000, 5000];
const userQuery = "5000"; //when we search about array have number will give us fales why? we will know.....

console.log(salaries.includes(userQuery));
//عند البحث عن دالة فيها ارقام سوف يعطينا خاطئ لماذا ؟ سوف نعرف السبب في الأسفل 

/////**********************************************************************************/////

const salaries = [1000, 2000, 5000];
const userQuery = "5000"; //here we are the differint is {Number()} because we search about number not strings

console.log(salaries.includes(Number(userQuery)));
//   لماذا لأننا لا نبحث نصوص انما ارقام{Number()} ها نحن التغير هنا كان اضافة 

//-----------------------------------------------------------------------------------//


//new way to {includes()} sime now 

console.log(salaries.includes(userQuery));

//-----------------------------------------------------------------------------------//


