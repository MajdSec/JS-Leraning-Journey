
let myFiles = ["File1", "File2", "File3"];

let newFiles = myFiles.splice(1, 1);
//actuality here we losing the array and just have what after "let"

console.log(newFiles); 
//Output : ["File2"]

/////***********************************************/////


myFiles.splice(1, 1); 
// in this way will keep save the arrya and deleti what we want 

console.log(myFiles); 
// Output : ["eFile1", "Fil3"]

//---------------------------------------------------//

let letters = ["A", "B", "C", "D", "E"];

letters.splice(1, 3); 
//{splice()}will cut the total you give it like 2 it's will cut 2 not like {slice()} it's counting

//الدالة تقطع حسب مجموع العدد الذي تعطيها لها عكس دالة الأخرى 
console.log(letters);

// Output : ["B", "C", "D",]

//---------------------------------------------------//

let colors = ["Red", "Blue"];

// if will what to change in string or number we have to give value for changing
colors.splice(1, 0, "Green");

//عندما نريد تغيير قيمة يجب تحديدها لكي يضيف مكانها 
console.log(colors);

// Output : ["Red", "Green", "Blue"]

/////***********************************************/////


 colors = ["Red", "Blue"];


colors.splice(1, 1, "Green");
// here we give number which one we what to change 

console.log(colors); 
//هنا اعطينا القيمة التي نريد استيدالها 
//Output : ["Red", "Green"] ✅

//---------------------------------------------------//

// the old way typing 

colors.splice(1, 1, "Green");

// the New way typing 

colors.toSpliced(2, 1, "Green")

//---------------------------------------------------//


let numbers = [2, 4, 6, 8];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    numbers.splice(i, 1);
  }//عندما نحذف مصفوفة في هذا الكود سوف يتخطى قيمة 
}
//when we deleti arrya and you for loop the loop will skip value 
console.log(numbers);

//Output : [4, 8]

/////***********************************************/////

 numbers = [2, 4, 6, 8];

for (let i = numbers.length - 1; i >= 0; i--) {
  if (numbers[i] % 2 === 0) {
    numbers.splice(i, 1);
  } // for skip this problem we start from last 
}
// لنتخطى هذه المشكلة نبدأ من النهاية للبداية ونحصل على القيمة التي نريدها تماما
console.log(numbers);
// Output : []

//---------------------------------------------------//

let prices = [10, 20, 30];
let total = 0;
//nan because of <= it's give as undefined
for (let i = 0; i <= prices.length; i++) {
    total += prices[i]; 
}
console.log(total); //الناتج سوف يكون  لا رقم السبب ان استخدمنا يساوي 
//Output : nan for make count just deleti (=)


//---------------------------------------------------//

// 
for (var i = 0; i < 3; i++) {}
//when we using (var) we make global cod and this thing is problem for that we using (let)

console.log(i); 
// يجب استخدام الطرق الحديثة لمنع القيمة العامة مما يسبب تدخل في الأكواد

//Output : 3
//---------------------------------------------------//

// the old way typing 

const fruits = ["Apple", "Banana", "Orange"];د
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); 
}

// the New way typing


for (const fruit of fruits) {
    console.log(fruit);
}
 
// the New way to deleti

 numbers = [5, 20, 8, 50];


const filteredNumbers = numbers.filter(num => num > 10);

console.log(filteredNumbers); 

//filter()

//---------------------------------------------------//

