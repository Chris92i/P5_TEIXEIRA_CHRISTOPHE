/* création d'une class teddy qui sert de modele
*/
class Teddy {

    constructor(colors, description, imageUrl, name, price, _id) {
        this.colors = colors;
        this.description = description;
        this.imageUrl = imageUrl;
        this.name = name;
        this.price = price;
        this._id = _id;
    }

    // mise en place d'un méthode pour la création de card 
    
    getCard() {
        let col = document.createElement("div");
        col.classList.add("col-12", "col-md-6");
        let card = document.createElement("div");
        card.classList.add("card");
        // card.style.width = "23%";

        let img = document.createElement("img");
        img.classList.add("card-img-top");
        img.setAttribute("src", this.imageUrl);
        img.style.height = "30vw";
        img.style.objectFit = "cover";

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = this.name;

        let cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = this.price / 100 + "€";

        let link = document.createElement("a");
        link.classList.add("btn", "btn-primary");
        link.setAttribute("href", "./product.html?id=" + this._id)
        link.textContent = "Voir la fiche produit";


        card.appendChild(img);
        card.appendChild(cardBody);
        card.appendChild(cardTitle);
        card.appendChild(cardText);
        card.appendChild(link);
        col.appendChild(card);

        return col;
    }
}