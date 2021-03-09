fetch('http://localhost:3000/api/teddies')
.then(response => response.json())
.then(teddies => {
    console.log(teddies);
})
.catch(error => alert("Erreur : " + error));

