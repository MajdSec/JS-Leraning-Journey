let total = 0;
let bills = [10, 20, 50];

bills.forEach(function (bill) {
  total = total + bill; //add this line
});

console.log(total); // 80

//----------------------------------------------------------------------//

let winners = ["Ferrari", "BMW", "Audi"];

winners.forEach(function (car, index) {
  console.log(`Rank ${index + 1}: ${car}`);
});

//----------------------------------------------------------------------//

let grades = [40, 95, 60, 30];

grades.forEach(function (grade) {
  // 🔴 المطلوب: اكتب الشرط داخل القوسين
  // نريد أن نقول: "إذا كانت الدرجة أكبر من أو تساوي 50"
  if (grade >= 50) {
    console.log(`Grade ${grade}: PASSED `);
  } else {
    console.log(`Grade ${grade}: FAILED `);
  }
});

//-----------------------------------------------------------------------//

let names = ["Ali", "Samer", "Yassir", "Huda"];

names.forEach(function (name, index) {
  if (name === "Yassir") {
    console.log(`Found him! He is at index: ${index}`);
  }
});

//-------------------------------------------------------------------//
let transactions = [1000, -200, 500, -50, -100];

let balance = 0;
let withdrawalCount = 0;

transactions.forEach(function (amount) {
  balance = balance + amount;

  if (amount < 0) {
    withdrawalCount = withdrawalCount + 1; //add 1 to counting
  }
});

console.log(`Final Balance: ${balance}`);
console.log(`Number of Withdrawals: ${withdrawalCount}`);

//---------------------------------------------------------------------------//

let scores = [50, 120, 40, 200, 90];

let highest = 500;

scores.forEach(function (score) {
  if (highest <= score) {
    //add {...<=....}
    highest = score;
  }
});

console.log(`The Champion Score is: ${highest}`);

//------------------------------------------------------------//

let gradess = [45, 90, 50, 30, 100, 65];

let totalSum = 0;
let successCount = 0;
let highestGrade = 0;

gradess.forEach(function (grade1) {
  totalSum = totalSum + grade1; // be my self

  if (grade1 >= 50) {
    successCount = successCount + 1; //with help
  }

  if (highestGrade <= grade1) {
    highestGrade = grade1; //be my self
  }
});

console.log(`Total Sum: ${totalSum}`); //  380
console.log(`Passed Students: ${successCount}`); //  4
console.log(`Highest Grade: ${highestGrade}`); // 100

//////////////////////////////////////////////////////////////////
////////////////////////// Objects ////////////////////////////////
/////////////////////////////////////////////////////////////////

let Nam = {
  nameL: "Muhsin",
  ageL: 33,

  sayHello: function () {
    return `hello`;
  },
};

console.log(Nam.nameL);
console.log(Nam.ageL);
console.log(Nam.sayHello());

//-------------------------------------------------------------------------//

let user = {
  firstName: "Samer",
  age: 25,
  job: "Backend Developer",

  Jaa: function () {
    //add this.
    return `Hello dod ${this.firstName} your ${this.age} your job is ${this.job}`;
  },
};

console.log(user.Jaa());

//----------------------------------------------------------------------------//


let laptop = {
  brand: "Dell",
  price: 1200,
  stock: 5,

  Php: function () {
    
    this.price = 1000;
    this.stock -= 1;
return `the last price for you is ${this.price} matyld we buy laptup we have now ${this.stock}`
  
  },
};

console.log(laptop.Php());//the last price for you is 1000 matyld we buy laptup we have now 4

//---------------------------------------------------------------------------//

let servers = [
    { name: "Alpha", status: "online" },
    { name: "Beta",  status: "offline" },
    { name: "Delta", status: "online" }
];

servers.forEach(function(item) {

    if (item.status === "online") {
    //add item.status/name + ===
        console.log(`Server ${item.name} is running`);
    }
  
});  

//-------------------------------------------------------------------//

let deals = [
    { title: "Minecraft", price: 25 },
    { title: "Among Us",  price: 5  },
    { title: "Terraria",  price: 9  },
    { title: "Cyberpunk", price: 50 }
];

deals.forEach(function(item) {

    if (item.price < 10 ) {
        console.log(`Cheap Game: ${item.title}`);
    }

});

//-------------------------------------------------------//

let gameCodes = [
    { code: "Gta-552-X", isValid: true },
    { code: "Fif-990-P", isValid: false },
    { code: "Pub-112-Q", isValid: true },
    { code: "Cod-776-M", isValid: false }
];

let Masrser = gameCodes.filter((M) => {


  return M.isValid === true;
}

)
console.log(Masrser)

//--------------------------------------------------------------//

let orders = [
    { title: "Elden Ring", price: 60, status: "completed", code: "AX-11" },
    { title: "FIFA 24",    price: 15, status: "pending",   code: "None"  },
    { title: "Cyberpunk",  price: 25, status: "completed", code: "CZ-99" }
];


orders
  .filter( (item) => item.status === "completed" )
  .forEach( (item) => {
      
      console.log(`sending code ${item.code}for game ${item.title}`);
  });

  //-------------------------------------------/

  let userBehavior = {
    totalClicks: 45,          // عدد النقرات
    secondsOnPage: 12,       // الوقت الذي قضاه (بالثواني)
    hasDiscountCode: false,  // هل يملك كود خصم؟
    typingSpeed: "Fast"      // سرعة الكتابة
};

function analyzeUser(behavior) {
    // 🔴 المطلوب منك:
    // اكتب شرطاً يفحص إذا كان الوقت أقل من 20 و السرعة تساوي "Fast"
    
    if (userBehavior.secondsOnPage < 20 && userBehavior.typingSpeed === "Fast" ) {
        return "Warning: This user is in a hurry! Show them the fastest payment option.";
    } else {
        return "User is calm. Show them more deals.";
    }
}

console.log(analyzeUser(userBehavior));

//-------------------------------------------------------------------//

