// Importar la classe Cistell.
import { Cistell } from "./gestor_cistella_poo.js";

// Importar la funció per recuperar les dades dels productes des de l'API.
import { dadesProducte } from "./producte.js";

// Funció per integrar les dades de un producte a la pàgina html.
function integrarDades(dades, articleSofa) {
  document.querySelector(
    "#cart__items"
  ).innerHTML += `<article class="cart__item" data-id="${articleSofa.id}" data-color="${articleSofa.colorSeleccionat}">
       <div class="cart__item__img">
         <img src="${dades.imageUrl}" alt="${dades.altTxt}">
       </div>
       <div class="cart__item__content">
         <div class="cart__item__content__description">
           <h2>"${dades.name}"</h2>
           <p>"${articleSofa.colorSeleccionat}"</p>
           <p>"${dades.price}" €</p>
         </div>
         <div class="cart__item__content__settings">
           <div class="cart__item__content__settings__quantity">
             <p>Qté : </p>
             <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${articleSofa.quantitat}">
           </div>
           <div class="cart__item__content__settings__delete">
             <br/>
             <p class="deleteItem">Supprimer</p>
           </div>
         </div>
       </div>
     </article> `;
}

function eliminar() {
  // Identificar la classe per al botoSuprimir.
  const botoSuprimir = document.getElementsByClassName("deleteItem");

  // Afegir l'esdeveniment al botó d'afegir a la cistella.
  botoSuprimir.forEach((botoSuprimir) => {
    botoSuprimir.addEventListener("click", (event) => {
      cistell.eliminar(articleSofa);
    });
  });
}
//============================================ OK ^

// Identificar la classe per canviar la quantitat.
// const botoSelector = document.getElementsByClassName(".itemQuantity");

// Afegir esdeveniment al botó input selector de quantitat.
// botoSelector.addEventListener("change", (selectorQuantitat));

//============================================== OK _

// Crear un objecte amb la clase Cistell.
const cistell = new Cistell();

// Adreça API + id.
const urlhost = "http://localhost:3000/api/products/";

// Si la cistella està buida canviar el títol <h1>.
if (cistell.panera.length == 0) {
  document.getElementById("titolCistella").innerHTML += `Votre panier est vide`;
}
// Si a la cistella hi han articles, mostrar el títol <h1> d'origen.
else {
  document.getElementById("titolCistella").innerHTML += `Votre panier`;

  // Bucle per mostrar els articles de la cistella i integrar les dades del producte al HTML.
  for (let i = 0; i < cistell.panera.length; i++) {
    dadesProducte(urlhost + cistell.panera[i].id).then((dades) =>
      integrarDades(dades, cistell.panera[i])
    );
  }
}
