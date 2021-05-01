window.onload = () =>{

    let formOrder = document.getElementById("formOrder");
    let firstName = document.getElementById("firstName");
    let lastNamed = document.getElementById("lastNamed");
    let email = document.getElementById("email");
    let address = document.getElementById("address");
    let codePostal = document.getElementById("codePostal");

    formOrder.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log(formOrder.checkValidity);
        if (firstName == "" || lastNamed == "" || email == "" || address == "" || codePostal ==""){
        }

    });

    

}