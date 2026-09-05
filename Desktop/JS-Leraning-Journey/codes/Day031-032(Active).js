let Calcloter = function (num1, num2) {
  return num1 + num2;
};
console.log(Calcloter(42, 25));

///////////////////////////////////////////////////////////////////

let MarkFacebook = function(Mart1, Mart2, Mart3){

return Mart1 + Mart2 * Mart3 + 33;
}

console.log(MarkFacebook(2, 88, 5))

/////////////////////////////////////////////////////////

  let jamelSamrt = function(sarta1, sarta2, sarta3){

return (sarta1 + sarta2) * sarta3;


}

console.log(jamelSamrt(150, 41, 2))

//////////////////////////////////////////////////////////


  const Marstans = function(Marta1, Marta2){

  return (Marta1 + Marta2) * 1.99;

};

console.log(Marstans(150, 100));

/////////////////////////////////////////////////////////

let x = (a) => (a + 100) * 3.0; 
console.log(x(100))

///////////////////////////////////////////////////////////

function Saymeoow(Fname, Lname){

let messag = `Hello`

function saytooo(){


messag = `${messag} ${Fname} ${Lname}`

}

saytooo();
 return messag ;
}

console.log(Saymeoow("masra", "tara"))

////////////////////////////////////////////////////////////


function Saymeoow(Fname, Lname){

let messag = `Hello`

function saytooo(){


 return  `${messag} ${Fname} ${Lname}`

}


 return saytooo();
}

console.log(Saymeoow("masra", "tara"))

/////////////////////////////////////////////////////////


function Saymeoow(Fname, Lname){

let messag = `Hello`

function saytooo(){
function getfullname(){

  return `${Fname} ${Lname}`;
}

 return  `${messag} ${getfullname()} `

}

 return saytooo();
}

console.log(Saymeoow("masra", "tara"))

//////////////////////////////////////////////////////////////////

function MakeCoffe(sugar){

function CalcSweetness(){
  
 if(sugar > 0){

 return  "have";

 }
if(sugar === 0){

  return  "have't";
}


}
let taste = CalcSweetness();
return taste
}

console.log(MakeCoffe(0))

////////////////////////////////////////////////////////////////////////////////////////

let myName = "Yassir";  

function changeName() {
  
    myName = "Ali"; // Delet the "let"
}

changeName();
console.log(myName); 

//////////////////////////////////////////////////////////////////////////////////////////

function BigHouse() {
        let money = 500;
    function Room1() {
      money = 600
    
    }

    function Room2() {
      // the let need to be in outside nested function for change number or string
       
        return money; 
    }
    Room1()
    return Room2();
}

 console.log(BigHouse())

////////////////////////////////////////////////////////////////////////////////////////////


function secret() {

  let password = "123"; // we need to add (let/const) to save the data 
}

secret();
console.log(window.userPassword)



