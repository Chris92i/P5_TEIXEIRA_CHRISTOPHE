const { response } = require("express");

const apiUrl = "http://localhost:3000/api/teddies";

fetch(apiUrl)
.then(response => {response.json()}
.then(teddies) => {console.log(teddies)}
