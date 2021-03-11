let card = document.getElementsById("ted")
class Teddie {
    constructor(_id, imgUrl, name, price){
        this._id = _id;
        this.imgUrl = imgUrl;
        this.name = name;
        this.price = price;
    }
    
}


fetch('http://localhost:3000/api/teddies')
.then(response => response.json())
.then((teddies) => {
    for (let teddie in teddies){
        console.log(teddie);
        console.log(teddies);
        console.log(teddies[0]);

        const newElt = ted.createElement("div");
        let addClass = newElt.div.classList.add("card");
        card.innerHTML += `
        <div class="card" style="width: 23%">
        <img src="" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text"></p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
        `;
        


        card.innerHTML +='
        <div class="card" style="width: 23%">
        <img src="" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text"></p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        '
    }


})

