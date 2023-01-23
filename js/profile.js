"use strict";


function test(){
alert('hi')
}
function CreatemAPost() {

  let loginData = getLoginData();
  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  myHeaders.append("Authorization", "Bearer " + loginData.token);
  // myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    text: document.getElementById("getPost").value
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


