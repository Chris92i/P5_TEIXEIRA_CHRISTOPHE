http://localhost:3000/api/teddies/5beaa8bf1c9d440000a57d94

fetch('http://localhost:3000/api/teddies')
.then(response => response.json())
.then((teddies) => {
    // for (let index in teddies){
    //   console.log(teddies);
    //   var ted = new Teddie(
    //     teddies[index].colors,
    //     teddies[index].description,
    //     teddies[index].imageUrl,
    //     teddies[index].name,
    //     teddies[index].price,
    //     teddies[index]._id
    //   );
      for (let teddy of teddies){
        console.log(teddy);
        var ted = new Teddie(
          teddy.colors,
          teddy.description,
          teddy.imageUrl,
          teddy.name,
          teddy.price,
          teddy._id
        );
      let card = ted.getCard();
      document.getElementById("ted").appendChild(card);
    }


})



