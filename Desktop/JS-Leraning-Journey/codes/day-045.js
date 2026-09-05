let price = 0;

console.log(`The price is ${price || 200}`)//ignor the 0 and false and null....
console.log(`The price is ${price ?? 200}`)//make value to 0 or null every time 


let price1 = 0;      
let price2 = null;   
let price3 = 20;     

console.log(`سعر اللعبة 1: ${price1 ?? 10}`); // we have 0 will take it 
console.log(`سعر اللعبة 2: ${price2 ?? 10}`); //we don't have in value soo we will take 10 
console.log(`سعر اللعبة 3: ${price3 ?? 10}`); //we have value 20 

//اختصار ناخذ البداية في حال عدم تحقق ناخذ التي بعدها الفرق ان هنا اعتمدناالصفر كقيمة

//syntax error : every time we need {()} for told the server from where we will start (from left) 

//------------------------------------------------------------------//

//old way and new way (syntax)


//old : || don't take 0

//new : ?? take 0

//--------------------------------------------------------------//

