console.log(localStorage);




// Obtenir els productes de la cistella des de Local Storage
let articlesCistella = JSON.parse(localStorage.getItem("Cistella",cistell));
// Mostra els productes adquirits a la cistella
console.log(articlesCistella);

// Si la cistella està buida canvia el títol <h1>
if (articlesCistella == null) {
  document.getElementById("titolCistella").innerHTML += `Votre panier est vide`;
}
// Si la cistella conté articles <h1> d'origen
else {
  document.getElementById("titolCistella").innerHTML += `Votre panier`;

  // Bucle per mostrar els articles de la cistella
  for (let i = 0; i < articlesCistella.length; i++) {
    document.querySelector("#cart__items").innerHTML += `<article class="cart__item" data-id="${articlesCistella[i].idProducte}" data-color="${articlesCistella[i].colorSeleccionat}">
       <div class="cart__item__img">
         <img src="${articlesCistella[i].fotoProducte}" alt="${articlesCistella[i].altTexte}">
       </div>
       <div class="cart__item__content">
         <div class="cart__item__content__description">
           <h2>"${articlesCistella[i].nomProducte}"</h2>
           <p>"${articlesCistella[i].colorSeleccionat}"</p>
           <p>"${articlesCistella[i].preuProducte}" €</p>
         </div>
         <div class="cart__item__content__settings">
           <div class="cart__item__content__settings__quantity">
             <p>Qté : </p>
             <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
           </div>
           <div class="cart__item__content__settings__delete">
             <p class="deleteItem">Supprimer</p>
           </div>
         </div>
       </div>
     </article> `;

     let totalArticles = [];
     let preuTotal = [];

  }
}

/**
 * [idProducte],
 * [nomProducte],
 * [preuProducte],
 * [fotoProducte],
 * [altTexte],
 * [descripcioProducte],
 * [colorSeleccionat],
 * [quantitatValor]
 */


