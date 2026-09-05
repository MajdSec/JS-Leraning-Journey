let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool");
myRequest.send();

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let data = JSON.parse(this.responseText);
    console.log(data.name);
  }
};

//------------------------------------------------//

function getGithubData(apiLink) {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.open("GET", apiLink);
    myRequest.send();

    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("Connection Error"));
      }
    };
  });
}

getGithubData("https://api.github.com/users/elzerowebschool")
  .then((data) => console.log(data.name))
  .catch((error) => console.error(error));

//------------------------------------------------//
  
fetch("https://api.github.com/users/elzerowebschool")
  .then((response) => response.json())
  .then((data) => console.log(data.name))
  .catch((error) => console.error(error));

//------------------------------------------------//

async function fetchWithAsync() {
  try {
    let response = await fetch("https://api.github.com/users/elzerowebschool");
    let data = await response.json();
    console.log(data.name);
  } catch (error) {
    console.error(error);
  }
}

fetchWithAsync();