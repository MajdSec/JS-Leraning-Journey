//higer-order function


let Adfar = [1, 2, 3, 4, 5, 6,];

let Myking = Adfar.map(function (element) {
    return element + element 
},);

console.log(Myking);


function sama(ele){

    return ele + ele
}
let add = Adfar.map(sama)

console.log(add)

//---------------------------------------------------------------------//

let domains = ["  google.com  ", "  amazon.net", "elzero.org  "];

let cleanDomains = domains.map((d) => {
     return d.trim(); // الخطأ هنا: قمت بالتنظيف ولكن لم "ترجع" النتيجة للمصفوفة الجديدة
});
// we have to add return 
console.log(cleanDomains);//[undefined, undefined, undefined] => [ 'google.com', 'amazon.net', 'elzero.org' ]

//------------------------------------------------

//false way 

let mySites = ["fast-tech.com", "cool-blog.net", "smart-tech.org"];

let updatedSites = mySites.map((site) => {{
    return site;
  }
  // نحذف كلمة واحد حتا يتم اظهار الدومينات كلها بسيطة 
});//we just delete tech 

console.log(updatedSites); // Output : ["FAST-TECH.COM", undefined, "SMART-TECH.ORG"] => [ 'fast-tech.com', 'cool-blog.net', 'smart-tech.org' ]

//-------------------------------------------------------------------------//

let comsr = ["google", "facebook", "twitter"];

let links = comsr.map( (n) => "http//" + n);
//just we add : "http//" + n (Implicit Return)
console.log(links); //["https://google", "https://facebook", "https://twitter"] => [ 'http//google', 'http//facebook', 'http//twitter' ]

//-------------------------------------------------------------------------//

let names = ["Yassir", "Ali", "Osama"];//result have to be name + "-ok"

let result = names.map((name) => name + "-ok"//we need to add "-ok"
);
console.log(result)//[ Yassir, Ali, Osama ] => [ 'Majd-ok', 'Ali-ok', 'Osama-ok' ]

//-------------------------------------------------------------------------//

let rawDomains = ["  google.com  ", "  amazon.net", "facebook.com  "];

let cleanResult = rawDomains.map( (d) => {

    return d.trim()//we added the trim to delete spaces
} );

console.log(cleanResult);//["  google.com  ", "  amazon.net", "facebook.com  "]; => [ 'google.com', 'amazon.net', 'facebook.com' ]

//----------------------------------------------------------------------//
///////////////////////////////////////////////////////////////
//map it's easy more then old way (let = []; + for(i++).......)
///////////////////////////////////////////////////////////////
//----------------------------------------------------------------------//

let KaramLand = ["Yassir", "Mahdi", "Yisra", "Karim", "Yahya"];

let MyYnames = KaramLand.filter((ZL) => {
    
    return ZL.startsWith("Y")

})
console.log(MyYnames)

//--------------------------------------------------------------------//

let prices = [100, "Negotiable", 250, "Free", 500];

// الهدف: إبقاء الأرقام فقط (100, 250, 500)
let validPrices = prices.filter(function(p) {
    return typeof p === "number"; // just change string to number
});

console.log(validPrices); 
// ["Negotiable", "Free"] => [ 100, 250, 500 ]

//----------------------------------------------------------------//

let domainsr = ["google.com", "YAHOO.COM", "mysite.net", "FACEBOOK.COM"];
//just add toCowerCase() 
let comDomains = domainsr.filter(function(d) {
    return d.toLowerCase().endsWith(".com"); 
});

console.log(comDomains);//[ 'google.com', 'YAHOO.COM', 'FACEBOOK.COM' ]


//--------------------------------------------------------------------//
let users = ["Majd", "Admin", "User1", "Supervisor", "User2"];

let normalUsers = users.filter(function(u) {
// !== and && (last one was) ||
    return u !== "Admin" && u !== "Supervisor"; 
});

console.log(normalUsers);
//["Majd", "User1", "User2"] 

//----------------------------------------------------------------------//

let mixedDomains = ["ab.com", "thisisverylong.com", "cool.com", "abcdefgh.net", "xyz.org"];

let shortDomains = mixedDomains.filter((d) => {
    
    if(d.length < 9){
        return d 
    }else{
        return false//we using if , else and length to have the small dom 
    }
    
}
    
);

console.log(shortDomains); 
// ["ab.com", "cool.com", "xyz.org"] 

//-------------------------------------------------------------//

let extensions = ["shop.xyz", "store.com", "my-blog.net", "free.info", "tech.com"];

// المطلوب: القائمة يجب أن تحتوي فقط على .com و .net
let premiumDomains = extensions.filter((d) =>
     d.endsWith(".net")||d.endsWith(".com")
    //add endwith and ||
);

console.log(premiumDomains);
//[ 'store.com', 'my-blog.net', 'tech.com' ]

//-----------------------------------------------------------------------//

let riskyDomains = ["best-shop.com", "scam-alert.net", "secure.com", "hack-tool.org", "Yassir-store.com"];

let safeDomains = riskyDomains.filter((J) => 
     !J.startsWith("scam")&& !J.startsWith("hack") //add startswith, && and !

)
console.log(safeDomains)//[ 'best-shop.com', 'secure.com', 'Yassir-store.com' ]

//-----------------------------------------------------------------------//

let scrapedNames = ["iPhone", "", "Samsung", "", "Nokia", "   "];

// المطلوب: حذف الـ "" (Empty Strings)
let cleanNames = scrapedNames.filter((n) => {
 
    
return n.trim()
});

console.log(cleanNames); 
// النتيجة المطلوبة: ["iPhone", "Samsung", "Nokia"]

//-----------------------------------------------------------------------//

let pricess = [50, 150, 900, 450, 20, 300];

// المطلوب: السعر يجب أن يكون (أكبر من أو يساوي 100) "و" (أصغر من أو يساوي 500)
let budgetPrices = prices.filter((p) => {

return p >= 100 && p <= 500; //we just us this line
 
});

console.log(budgetPrices);
//  [150, 450, 300]

//---------------------------------------------------------------------//