window.onload = () => {
    var searchParams = new URLSearchParams(window.location.search);
    const idTeddie = searchParams.get("id");

    var cart = {};
    cart.products = [];


    //ajout dans le local.storage

    // localStorage.setItem('cart', JSON.stringify(cart));


    let addProduct = localStorage.setItem('cart', JSON.stringify(cart));

    let test =()=>{console.log("yo c'est un test")};
    var clicBtn = document.getElementById("btnAddCart");

    console.log(clicBtn);


    fetch('http://localhost:3000/api/teddies/' + idTeddie)
        .then(response => response.json())
        .then((teddy) => { 
            document.getElementById("nameTeddy").innerText = teddy.name;
            document.getElementById("prix").innerText = teddy.price / 100 + "€";
            document.getElementById("imgTeddy").setAttribute("src", teddy.imageUrl);
            document.getElementById("descript").innerText = teddy.description;
            console.log(teddy.imageUrl);
            const select = document.getElementById("colors");
            for (const color of teddy.colors){
                const option = document.createElement("option");
                option.value = color;
                option.innerText = color;
                select.appendChild(option);
            }
            clicBtn.addEventListener('click',test );
        })


        // clic sur ajouter au panier

        // clicBtn.addEventListener("clic", addProduct);
}