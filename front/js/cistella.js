  // Recupera la URL de la pàgina actual
  var str = window.location.href;

  // Declara la nova variable d'URL
  var url = new URL(str);

  // Retorna un objecte URLSearchParams permetent l'accés als arguments de la consulta get, en aquest cas "id"
  var id = url.searchParams.get("id");  

  // L'adreça API + id
  const urlhost = "http://localhost:3000/api/products/" + id; 

// Capturar les dades dels productes amb l'API Fetch
let dadesRecull = function() {
	fetch (urlhost)
	.then(resposta => resposta.json())
	.then((dades) => { console.log(dades);


















//  <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
//  <div class="cart__item__img">
//    <img src="../images/product01.jpg" alt="Photographie d'un canapé">
//  </div>
//  <div class="cart__item__content">
//    <div class="cart__item__content__description">
//      <h2>Nom du produit</h2>
//      <p>Vert</p>
//      <p>42,00 €</p>
//    </div>
//    <div class="cart__item__content__settings">
//      <div class="cart__item__content__settings__quantity">
//        <p>Qté : </p>
//        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
//      </div>
//      <div class="cart__item__content__settings__delete">
//        <p class="deleteItem">Supprimer</p>
//      </div>
//    </div>
//  </div>
// </article>