window.onload = () => {

    const localPanier = localStorage.getItem("cart");
    console.log(localPanier);

    let objCart = JSON.parse(localPanier);
    console.log(objCart);

    for (var teddyObj of objCart) {
        console.log(teddyObj);
    }

    






}