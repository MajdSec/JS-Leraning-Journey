// OOP Private and prototype

class laptop {
  static laptopTotal = 0;
  constructor(brand, ram) {
    this.brand = brand;
    laptop.laptopTotal += 1;
    this.ram = ram;
  }
  checkPerformance() {
    if (this.ram >= 16) {
      console.log(`Powerful`);
    } else {
      console.log(`Standard`);
    }
  }
}

const Nana = new laptop("Muzu", 8);
const Sana = new laptop("Zozo", 24);

console.log(laptop.laptopTotal);
console.log(Nana, Sana);

//-----------------------------------------------------------------------//

class BankAccount {
  static totalBankMoney = 0;

  #balance = 0;

  constructor(ownerName) {
    this.ownerName = ownerName;
  }
  deposit(amount) {
    this.#balance += amount;
    BankAccount.totalBankMoney += amount;
  }
  showBalance() {
    console.log(
      "Client: " + this.ownerName + " | Personal Balance: " + this.#balance,
    );
  }
}

class VIPAccount extends BankAccount {
  constructor(ownerName, vipLevel) {
    super(ownerName);
    this.vipLevel = vipLevel;
  }

  vipDeposit(amount) {
    let bonusAmount = amount * 1.1;

    console.log(this.ownerName + " is making a VIP deposit...");

    this.deposit(bonusAmount);
  }
}

const standardUser = new BankAccount("Ali");
standardUser.deposit(500);
standardUser.showBalance();

console.log("************************");

const vipUser = new VIPAccount("Sami", "Gold");
vipUser.vipDeposit(100);
vipUser.showBalance();

console.log("************************");

console.log("Total Money inside Central Bank: " + BankAccount.totalBankMoney);

console.log(`*************************`)

//-----------------------------------------------------------------------//

class Spaceship {
    static totalShips = 0;
    #healh = 100
    constructor(name){
        this.name = name
     Spaceship.totalShip++;
    
    }
takeDamage(damage){
    this.#healh -= damage
    console.log(`${this.name} took damage! Health left ${this.#healh}`)
}
}
 class Armoredship extends Spaceship{

    constructor(name, armor){
        super(name)
        this.armor = armor
    }
    defendAndTakeDamage(attackPower){
let netDamage = attackPower - this.armor
this.takeDamage(netDamage)

    }
 }

 const T = new Spaceship ("Apollo")
 const Y = new Armoredship("Titan" , 20)

 T.takeDamage(50)
 Y.defendAndTakeDamage(50)

 console.log("Total Ships built: " + Spaceship.totalShips);

//-----------------------------------------------------------------------//

// A Class is a blueprint or factory used to create individual objects.

// Private (#) data is securely hidden inside the class and cannot be accessed from the outside.

// Static variables belong to the class itself to act as shared memory, not to the individual objects.

// Inheritance (extends) allows a new child class to copy and build upon the features of an existing parent class.