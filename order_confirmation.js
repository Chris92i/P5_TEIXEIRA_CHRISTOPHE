window.onload = () =>{
    //récupération des infos dans URL num commande et total
    var searchParams = new URLSearchParams(window.location.search);
    const orderId = searchParams.get("order");
    const montantTotal = searchParams.get("total");

    console.log(orderId);
    console.log(montantTotal);

    document.getElementById("numCommande").innerHTML = orderId;
    document.getElementById("total").innerHTML = montantTotal + "€";

} 