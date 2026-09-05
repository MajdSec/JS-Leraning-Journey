//Destructuring Arrya 


const proxies = ["192.168.1.1", "10.0.0.5", "172.16.0.2", "192.168.1.100"];

[a, , , ,] = proxies;

[ , , c ,] = proxies;// we can make more varbiles in one line

console.log(a)
console.log(c)

//-------------------------------------------------------------//

const serverData = ["Main_Server", "Active", [80, 443, 8080]];

 let [ma, ,[,ew]] = serverData;//serach about element inside array inside it 

console.log(ma)
console.log(ew)

//-------------------------------------------------------------//


const mapLocation = ["Target_Alpha", [36.2, 45.8]];


 let [sr,[,re]] = mapLocation;//tring 

 console.log(sr)
 console.log(re)

//-------------------------------------------------------------//

//old way to change element

let primaryServer = "Server_A";
let secondaryServer = "Server_B";

// let temp = primaryServer; 
// primaryServer = secondaryServer;
// secondaryServer = temp; 


// console.log(secondaryServer);
// console.log(primaryServer);

//new way to change element

[primaryServer, secondaryServer] = [secondaryServer, primaryServer]
//just :)

console.log(secondaryServer);
 console.log(primaryServer);

//-------------------------------------------------------------//

const searchResults = ["Result_3", "Result_2", "Result_1"];


[searchResults[0] , searchResults[2]] = [searchResults[2], searchResults[0]];//change index

console.log(searchResults)//of curs if the elements like this array we using reverse() more easy 

//-------------------------------------------------------------//

const scrapedDate = ["25", "2026", "12"]; 

[scrapedDate[1], scrapedDate[2]] = [scrapedDate[2], scrapedDate[1]]

console.log(scrapedDate)//but here we want change index not reverse