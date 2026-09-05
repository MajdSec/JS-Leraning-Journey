let Mars = {
  theName: "Yassir",
  "country p": "syria",
  "6766" : "jfj"
};

console.log(Mars["country p"])
console.log(Mars[6766])

//---------------------------------------------------------------//

let usera = {
    name: "Majd",
    age: 22,
    country: "Syria",
    job: "Developer"
};

let query = "country"; 

console.log(usera[query]);

//--------------------------------------------------------------//

let product = {
    title: "Laptop",
    details: {
        color: "Silver",
        screen: "15 inch",
        price: {
            amount: 1000,
            currency: "USD"
        }
    }
};

console.log(product.details.price.amount);//using a lot of "."

//--------------------------------------------------------------//

let botSettings = {
    speed: "Fast",
    score: 50,
    theme: "Dark"
};

console.log(botSettings.score = 50); 
// النتيجة المتوقعة: { speed: "Fast", score: 50, theme: "Dark" }

//-------------------------------------------------------------//

let productc = {
    title: "Mouse",
    prices: 100,  // تخيل أن هذا الرقم متغير ولا تعرفه
};


console.log(productc.prices += 50);

//---------------------------------------------------------------//

let profile = {
    username: "Dragon2026",
    city: "Damascus"
};

let userChoice = "city"; 
let newValue = "Aleppo"; //change userChoice to newValue 


console.log(profile[userChoice] = newValue)

//-----------------------------------------------------------------//

let userData = {
    username: "Majd_Sy",
    password: "12345Secret", // 🚨 خطر! يجب حذف هذا السطر برمجياً
    level: 5,
};

 delete userData.password//add delete ()=>

console.log(userData);

//----------------------------------------------------------------//

let serverErrors = {
    "200": "OK",
    "404": "Page Not Found",
    "500": "Server Error"
};

let currentError = 404;

console.log(serverErrors[404])

//----------------------------------------------------------//

/*
  Object
  - Nested Object And Trainings
*/

let available = true;

let user = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  // دالة للتحقق من التوفر (تعتمد على المتغير الخارجي)
  checkAv: function () {
    if (available === true) {
      return "Free For Work";
    } else {
      return "Not Free";
    }
  },
};

// 1. الوصول للبيانات الأساسية
console.log(user.name);
console.log(user.age);

console.log(user.skills);
console.log(user.skills.join(" | "));
console.log(user.skills[2]); 

console.log(user.addresses.ksa);
console.log(user.addresses.egypt.one);

console.log(user["addresses"].egypt.one);
console.log(user["addresses"]["egypt"]);
console.log(user["addresses"]["egypt"]["one"]);

console.log(user.checkAv());

//-----------------------------------------------------------//

let useraa = {
    name: "Majd",
    type: "Admin",
    active: true,
};



if (useraa.active === true && useraa.type === "Admin") {
    console.log("Access Granted ");
} else {
    console.log("Access Denied ");
}

//---------------------------------------------------------------//

 /////////////////////////////////////////////////////////////////
 ////////////////////// new object ///////////////////////////////
 /////////////////////////////////////////////////////////////////

 //make new object actully the noraml way more then easyer

 aljap = new Object()