// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(num => {
//     if (num === 3) {
//         //break; //break can't stoped the forEach because it's not loop it's function 
//     }
//     console.log(num);
// });//الأيقاف لا يعمل مع هذه الكود السبب انه دالة وليس حلقة
//Output : 1  2 3 4 5
/////***********************************************************////

 numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
    //for skip problem we using (for...of)
    if (num === 3) {
        break;
    }
    console.log(num);
}//لكي نتخطى هذه المشكلة نستخدم الدالة اعلاها 
//Output : 1 2 3 
//----------------------------------------------------------------//

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] === 5) {
//             break; 
//         }//break dosen't work because we breaked inside loop the mother loop will skip break and print all array 
//         console.log(matrix[i][j]);
//     }//المشكلة ان البريك اوقفت الحلقة الدخلية فقط ام الكود الأساسية لم يتأثر
// }
//Output : 1-9

/////***********************************************************/////


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

 Martine : for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 5) {
            break Martine; //here we told the pc we want break (Martin)not the first loop
        }//المشكلة  ان الكمبيوتر فهم توقف خارجي وليس فقط لحلقة الداخلية 
        console.log(matrix[i][j]);
    }
}//Output : 1 2 3 4

//----------------------------------------------------------------//

// const grade = "A";

// switch (grade) {
//     case "A":
//     case "B":
//         console.log("You Passed!");
//       // here will give as all time F because (case)can't break her self
        
//     case "F":
//         console.log("You Failed!");
//         break;
// }Output : You Failed

/////***********************************************************/////


const grade = "A";

switch (grade) {
    case "A":
    case "B":
      
console.log("You Passed!");
      break;// here we add break the (swith/break) here like (of...else) it's short more then (of...eles)
        
    case "F":
        console.log("You Failed!");
        break;//هنا طلبنا اضفنا توقف عند الحالتين السبب ان دالة لا تتوقف عكس دالة المعترف عليها لهذا نوقفها يدويا سبب استخدام لأنه اقصر من الأصلي
}//Output : You Passed

/////************************************************************/////

//the Old way syntax :

if (num === 3) {
        //break;
    }

//the New Ways syntax :

//for search we using 
(find())

//for know if we have the value 

(some())

//