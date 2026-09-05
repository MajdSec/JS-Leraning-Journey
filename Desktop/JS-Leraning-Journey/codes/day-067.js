
// // set data type

// let myData = [1, 1, 1, 2, 3];
// let myUniqueData = new Set(myData);

// console.log(myData);
// console.log(myUniqueData); 
// myUniqueData.add(4).add(5).add(5);//to add new element 
// console.log(myUniqueData);
// console.log(myUniqueData.has(1)); //search to element and give you true/false
// console.log(myUniqueData.has("1")); 
// console.log(myUniqueData.size);//for know index number 

// myUniqueData.delete(2);//for delete just value come like true/false
// console.log(myUniqueData); 

// myUniqueData.clear();//to clear all element (0)
// console.log(myUniqueData.size); 


//hash tables = for more speed serach with includes()
//weakset = to delete the data in RAM

//----------------------------------------------------------------//

// let scrapedData = ["dell.com", "apple.com", "dell.com", "microsoft.com", "apple.com"];

// let serr = new Set(scrapedData)


// console.log(serr.has("amazon.com"));

// console.log(serr.add("amazon.com"));

// console.log(serr.delete("apple.com"));

// console.log(serr.size)

// console.log(serr.clear())

// console.log(serr)

//----------------------------------------------------------------//

// let serverOneData = [101, 102, 103, 101, 104];
// let serverTwoData = [103, 105, 102, 106, 105];

//  let Nasr = new Set([...serverOneData , ...serverTwoData])

// console.log(Nasr)

// console.log(Nasr.add(107))

// console.log(Nasr.delete(103))

// console.log(Nasr)

// let finalDatabase = [...Nasr]

// console.log(finalDatabase)

// console.log(Nasr.clear())

//----------------------------------------------------------------//

// let interceptedMessage = "Elzero Web School";

// let mnm = new Set(interceptedMessage)

// console.log(mnm.delete(" "))

// console.log(mnm.delete("o"))

// console.log(mnm)

// let finalArrya = [...mnm]

// console.log(finalArrya)

// console.log(mnm.size)

//----------------------------------------------------------------//
