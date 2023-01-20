// /* Posts Page JavaScript */

// "use strict";

// function GetAllPost() {
//   let displayPosts = document.getElementById('displayPost');
//   let loginData = getLoginData();

//   var myHeaders = new Headers();
//   myHeaders.append("accept", "application/json");
//   myHeaders.append("Authorization", 
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0cmluZyIsImlhdCI6MTY3NDA2ODI4MywiZXhwIjoxNjc0MTU0NjgzfQ.NhlmBFNUn4be5nXWZmOTluYDF2rlGVqm9LcZ-qkmvz0" + loginData.token);

//   var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
//   };

//   fetch("https://microbloglite.herokuapp.com/api/posts", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
    
//   }
// GetAllPost();



// Pre-made code from starter template of project provided by REmsey
// let myHeaders = new Headers();
//   myHeaders.append(
//     "Authorization",
//     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0cmluZyIsImlhdCI6MTY3MzM3Mjc1NiwiZXhwIjoxNjczNDU5MTU2fQ.4i8jrN6NXBa3C_9YUTCaYz6Fkz8kkKLUFNnNCLQPhFY"
//   );
//   myHeaders.append("Content-Type", "application/json");

//   let raw = JSON.stringify({
//     text: "This is a post about JavaScript",
//   });

//   let requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//   };

//   let myresults = document.getElementById("results");
//   fetch("https://microbloglite.herokuapp.com/api/posts", requestOptions)
//     .then((response) => response.text())
//     .then((result) => (myresults.innerHTML += result))
//     .catch((error) => console.log("error", error));



// function createApost() {
//   const token = getLoginData()
//   // console.log(token.token)
//   const message = document.getElementById("postArea").value
//   let myHeaders = new Headers();
//   myHeaders.append("Authorization", "bearer", + token.token);
//   myHeaders.append("Content-type", "Application/json");


//   let raw = JSON.stringify({
//     text: message
//   });
//   console.log(raw)

//   let requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: raw,
//     redirect: 'follow'
//   };
  
//   fetch("https://microbloglite.herokuapp.com/api/posts", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

// }

///////

function createApost() {
  const token = getLoginData()
  const message = document.getElementById("postArea").value
let myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0cmluZyIsImlhdCI6MTY3NDI1MjI1NSwiZXhwIjoxNjc0MzM4NjU1fQ.McHbg8_7oWb93uLSte8Nxt8ldt8cn6d6WuYvL-1VN4I");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "text": message
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://microbloglite.herokuapp.com/api/posts", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}


function displayPost() {
  const token = getLoginData()
  const message = document.getElementById("showPost")
let myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0cmluZyIsImlhdCI6MTY3NDI1NDk0NSwiZXhwIjoxNjc0MzQxMzQ1fQ.oiAHIQzc_GWDXKwENOjidaWQRYQpQtCJXPnc84p5gOM");
myHeaders.append("Content-Type", "application/json");



let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  
  redirect: 'follow'
};

fetch("https://microbloglite.herokuapp.com/api/posts?limit=500&offset=0", requestOptions)
  .then(response => response.text())
  .then((result => {document.getElementById("showPost").innerHTML;}))
  .catch(error => console.log('error', error));


}


