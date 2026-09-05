let FoodList = ["Hot Pizza", "Marar", "larais", "marta", "karam"];

console.log(`Hello ${FoodList[1]}`);
console.log(`${FoodList[1][2]}`);
console.log(`${FoodList[3][1][4]}`);
console.log(`${FoodList[3][0]}`);

console.log(FoodList);
FoodList[1] = "krpot";
console.log(FoodList);
FoodList[3][1] = "samir";
console.log(FoodList);
FoodList[3] = ["fathe", "sara"];
console.log(FoodList);

console.log(Array.isArray(FoodList));
console.log(Array.isArray("sara"));

FoodList[FoodList - 1] = "Gamal";
console.log(FoodList);
console.log(FoodList.length);

FoodList.length = 2
console.log(FoodList);