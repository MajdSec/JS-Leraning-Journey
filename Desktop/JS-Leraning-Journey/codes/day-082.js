// //API

// fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
//   .then(response => response.json())
//   .then(data => {

//       let theJoke = data.joke;

//       console.log("joke today is :");
//       console.log(theJoke);
//   });

//--------------------------------------------------------//

// fetch("https://jsonplaceholder.typicode.com/users/3")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     let name = data.name;

//     let street = data.address.street;

//     let catchphrase = data.company.catchPhrase;

//     console.log("the Name is :" + name);
//     console.log("the street :" + street);
//     console.log("the catch is :" + catchphrase);
//   });

//----------------------------------------------------------//

// fetch("https://dummyjson.com/carts/1")
//   .then((response) => response.json())
//   .then((data) => {
//     let userId = data.products[1].id;

//     let title = data.products[1].title;
//     let price1 = data.products[1].price;
//     let price2 = (data.products[1].price * 1.15).toFixed(2);

//     let Quantity = data.products[1].quantity;

//     console.log("Number of the luckey man :" + userId);
//     console.log("the product is : " + title);
//     console.log("orginal price  : " + price1);
//     console.log("totla price after taix : " + price2);
//     console.log("the quantity number : " + Quantity);
//   });

//----------------------------------------------------------//


fetch("https://dummyjson.com/users/5")
  .then((response) => response.json())
  .then((data) => {

let firstName = data.firstName
let lastName = data.lastName
let fullName = firstName + " " + lastName
let hitory = data.bank.cardExpire
let address = data.address.coordinates.lat
let depatment = data.company.department 

console.log("Mr : " + fullName)
console.log("The cart stop in : " + hitory)
console.log("lat about his address : " + address)
console.log("His work in : " + depatment)


  })