window.onload = () => {
    var searchParams = new URLSearchParams(window.location.search);
    const idTeddie = searchParams.get("id");
    const clicBtn = document.getElementById("btnAddCart");

    const addCart = (teddy) => {
        console.log(teddy);
        const color = document.getElementById("colors").value;
        const qty = document.getElementById("quantity").value;
        // let teddyName = 

        // Ajouter un panier
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        // creation de l'objet teddy qui servira de model pour l'envoi dans le panier
        let teddyCart = {
            id: idTeddie,
            Nom : teddy.name,
            couleur : color,
            Prix : teddy.price  / 100 + "€", 
            quantite : qty
        };

        console.log(teddyCart);


        var exist = false;


        for (var item of cart) {
            if ((item.id == idTeddie) && (item.couleur == teddyCart.couleur)) {
                item.quantite = parseInt(item.quantite) + parseInt(qty);
                exist = true;
                break;
            }
        }
        if (exist == false) {
            cart.push(teddyCart);
        }


        //Envoyer le pannier dans le localStorage

        let JsonCart =  JSON.stringify(cart);
        console.log(JsonCart);
        localStorage.setItem("cart", JsonCart);
        console.log(localStorage);

    }



    // Recup teddy par ID

    fetch('http://localhost:3000/api/teddies/' + idTeddie)
        .then(response => response.json())
        .then((teddy) => {
            document.getElementById("nameTeddy").innerText = teddy.name;
            document.getElementById("prix").innerText = teddy.price / 100 + "€";
            document.getElementById("imgTeddy").setAttribute("src", teddy.imageUrl);
            document.getElementById("descript").innerText = teddy.description;
            console.log(teddy.name);
            console.log(teddy);
            teddy.qty = 1;
            const select = document.getElementById("colors");
            for (const color of teddy.colors) {
                const option = document.createElement("option");
                option.value = color;
                option.innerText = color;
                select.appendChild(option);
            }
            clicBtn.addEventListener('click',() => addCart(teddy));
        })
}