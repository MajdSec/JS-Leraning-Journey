// //OOP

// class player{
//     constructor(playerName, playerType){
// this.Name = playerName;
// this.type = playerType;
// this.level = 1;
// this.isVIP = false;
//     }
//     levelUp(){
//         this.level += 1
//         console.log( `congrat ${this.Name} have new level now you are ${this.level}`    )
//     }

// }

// let myChar = new player("pardoo", "knigth")

// myChar.levelUp()

// myChar.isVIP = true;

// console.log(myChar)

//------------------------------------------------------------------------//
class BankAccount {
  // 1. الخصائص الثابتة للحساب
  constructor(customerName) {
    this.Name = customerName;
    this.balance = 0; // الرصيد الأولي صفر
    this.status = "نشط"; // حالة الحساب

    // مسحنا this.amount من هنا لأنها ليست صفة ثابتة
  }

  // 2. دالة الإيداع (تستقبل المبلغ كمعلومة مؤقتة)
  deposit(amount) {
    // نجمع المبلغ الجديد على الرصيد القديم
    this.balance += amount;
    console.log(`تم إيداع ${amount}. رصيدك الجديد هو: ${this.balance}`);
  }

  // 3. دالة السحب (تستقبل المبلغ كمعلومة مؤقتة)
  withdraw(amount) {
    // نفحص: هل المبلغ المطلوب سحبه أصغر من أو يساوي الرصيد؟
    if (amount <= this.balance) {
      this.balance -= amount; // نخصم المبلغ من الرصيد
      console.log(`تم سحب ${amount}. رصيدك المتبقي الآن: ${this.balance}`);
    } else {
      console.log(`عذراً يا ${this.Name}، رصيدك غير كافٍ!`);
    }
  }
}

// ================= التطبيق =================

let totooooot = new BankAccount("Naser");

// بدلاً من تغيير الرصيد يدوياً، نستخدم دالة الإيداع لإضافة الـ 1000
totooooot.deposit(1000); // سيطبع: تم إيداع 1000. رصيدك الجديد هو 1000

// نجرب سحب 300
totooooot.withdraw(300); // سيطبع: تم سحب 300. رصيدك المتبقي 700

// نجرب سحب 5000 (أكبر من الرصيد)
totooooot.withdraw(5000); // سيطبع: عذراً يا Naser، رصيدك غير كافٍ!

totooooot.status = "مغلق";

console.log(totooooot);

//-------------------------------------------------------------------------------//

class spaceShip {
  constructor(name, captaim) {
    this.name = name;
    this.machen = captaim;
    this.engineOn = false;
    this.fuel = 100;
    this.health = 100;
    this.shield = 100;
    this.speed = 0;
  }
  startEngine() {
    if (this.fuel > 0) {
    this.engineOn === true
      console.log(`Engines started successfully for ${this.name}! `);
    } else {
      console.log(`Warning! Not enough fuel to start the engine`);
    }
  }
  accelerate(amount) {
    if (this.engineOn === true) {
      console.log(`Cannot accelerate, the engine is off!`);
    } else if (this.speed > this.fuel) {
      this.fuel -= 10;
      this.speed += amount;
      console.log(
        `Accelerated! Current speed: ${this.speed} | Remaining fuel: ${this.fuel} `,
      );
    }
  }
  taleDamage(damageAmount) {
    this.shield -= damageAmount;
    if (this.shield === 0 && this.health - damageAmount) {
      console.log(
        console.log(
          ` We took a hit! Shield level: ${this.shield} | Hull health: ${this.health} `,
        ),
      );
    }
  }

  dashboard() {
 console.log(`
=== 🛸 Status Report: ${this.name} ===
👨‍✈️ Captain: ${this.captain}
⚙️ Engine: ${this.engineOn ? "ON" : "OFF"}
🚀 Speed: ${this.speed}
⛽ Fuel: ${this.fuel}
🛡️ Shield: ${this.shield}
❤️ Health: ${this.health}
=======================================
`);
  }
}

let state = new spaceShip("DMO", "sayed")

state.startEngine(50)
state.engineOn = true
state.accelerate (500)
state.taleDamage(30)
state.taleDamage(70)
state.dashboard()
console.log(state)

//wrong code 
//-----------------------------------------------------------------------------------//

