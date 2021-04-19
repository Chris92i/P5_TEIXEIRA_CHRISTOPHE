window.onload = () => {

    const localPanier = localStorage.getItem("cart");
    console.log(localPanier);

    let objCart = JSON.parse(localPanier) || [];
    console.log(objCart);

    let teddyObj;

    let idDuTeddy = "";
    // let teddyObj;
    const tbody = document.getElementById("tbody");

    let compteur = 1;

    class Panier {
        constructor(color, name, price, _id, qty) {
            this.color = color;
            this.name = name;
            this.price = price;
            this._id = _id;
            this.qty = qty;
        }
        tableau() {

            let line = document.createElement("tr");

            let indicateur = document.createElement("th");
            indicateur.innerText = compteur;

            let cellName = document.createElement("td");
            cellName.classList.add("id");
            cellName.setAttribute("id", "nom");

            let cellCouleur = document.createElement("td");
            cellCouleur.classList.add("id");
            cellCouleur.setAttribute("id", "couleur");

            let cellQty = document.createElement("td");
            cellQty.classList.add("id");
            cellQty.setAttribute("id", "qty");

            let cellPrix = document.createElement("td");
            cellPrix.classList.add("id");
            cellPrix.setAttribute("id", "prix");

            let cellSupp = document.createElement("td");
            cellSupp.classList.add("id");
            cellSupp.setAttribute("id", "supprimer");

            let btnSup = document.createElement("button");
            btnSup.classList.add("id");
            let btnSupprimer = compteur - 1;
            btnSup.setAttribute("id", btnSupprimer);
            btnSup.setAttribute("class", "btn-primary");
            
            // <button class="btn"><i class="fa fa-trash"></i> Trash</button>
            
            // <i class="bi bi-trash"></i> version bootstrap
            
            cellName.textContent = this.name;
            cellCouleur.textContent = this.color;
            cellQty.textContent = this.qty;
            cellPrix.textContent = parseInt(this.price) * parseInt(this.qty);
            btnSup.innerHTML = "<i class=\"fa fa-trash\"></i> Supprimer";
        

            line.appendChild(indicateur);
            line.appendChild(cellName);
            line.appendChild(cellCouleur);
            line.appendChild(cellQty);
            line.appendChild(cellPrix);
            line.appendChild(cellSupp);
            cellSupp.appendChild(btnSup);
            tbody.appendChild(line);
            compteur++;
            
            const SuppTeddie = () => {
                console.log("hello BG");
                objCart.splice(btnSupprimer,1);
                console.log(objCart);
                const cart = JSON.stringify(objCart) || [];
                var newCart = localStorage.setItem("cart",cart);
                document.location.reload();

            }
            console.log(objCart);
            btnSup.addEventListener("click", SuppTeddie);
        }
    }


    let total = 0;

    for (const teddyObj of objCart) {
        console.log(teddyObj);
        idDuTeddy = teddyObj.id;
        console.log(teddyObj.quantite);


        let teddiesInCart = new Panier(teddyObj.couleur, teddyObj.Nom, teddyObj.Prix, teddyObj.id, teddyObj.quantite);
        teddiesInCart.tableau();
        total += parseInt(teddyObj.Prix) * parseInt(teddyObj.quantite);

    }

    console.log(total);



    let lineTotal = document.createElement("tr");

    let cellTotal = document.createElement("td");
    cellTotal.classList.add("id");
    cellTotal.setAttribute("id", "Total");
    cellTotal.setAttribute("colspan", 6);
    cellTotal.style.textAlign = "center";


    cellTotal.textContent = "Le montant total est de : " + total + "€";

    lineTotal.appendChild(cellTotal);
    tbody.appendChild(lineTotal);



}

