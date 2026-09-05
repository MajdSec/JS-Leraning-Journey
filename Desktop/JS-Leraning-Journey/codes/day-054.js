let one = document.querySelector(".one");
let two = document.querySelectorAll(".tw");

window.onload = () => {
  two.fucus();
};

one.onblur = () => {
  document.links[0].click();
};

//focus() go inside object

//blur () exit outside object

//click () click object :)


//------------------------------------------------------------------//

let btn = document.querySelector(".search-btn")
if (btn.classList.contains("disavled")){
    console.log("false")
}else{

btn.clicl();
}


btn.classList.remove("disabled");
btn.click(); 




// contains("class") Check if element has a class (true/false)

// remove("class")  Remove a class from element

// add("class")   Add a class to element


//-------------------------------------------------------------------//


let element = document.getElementById("my-div");


console.log(element.style.display);

element.style.display = "none";
element.style.color = "red";

//style (Read)/Change inline CSS of element