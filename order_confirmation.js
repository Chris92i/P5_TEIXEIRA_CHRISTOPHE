window.onload = () =>{

    var searchParams = new URLSearchParams(window.location.search);
    const orderId = searchParams.get("order");
    const montantTotal = searchParams.get("total");

    console.log(orderId);
    console.log(montantTotal);

    // const clicBtn = document.getElementById("btnAddCart");


    // let formOrder = document.getElementById("formOrder");
    // let firstName = document.getElementById("firstName");
    // let lastNamed = document.getElementById("lastNamed");
    // let email = document.getElementById("email");
    // let address = document.getElementById("address");
    // let codePostal = document.getElementById("codePostal");

    // formOrder.addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     console.log(formOrder.checkValidity);
    //     if (firstName == "" || lastNamed == "" || email == "" || address == "" || codePostal ==""){
    //     }

    // });

    

} 