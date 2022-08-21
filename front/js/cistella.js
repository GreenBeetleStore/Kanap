// Importar la classe Cistell.
import { Cistell } from "./gestor_cistella_poo.js";

// Crear un objecte amb la clase Cistell.
const cistell = new Cistell();

// Recuperar la URL de la pàgina actual.
const consultaStringUrlId = window.location.href;

// Declarar la nova variable d'URL.
const url = new URL(consultaStringUrlId);

// Retornar un objecte URLSearchParams permetent l'accés als arguments de la consulta get, en aquest cas "id".
const id = url.searchParams.get("id");

// Adreça API + id.
const urlhost = "http://localhost:3000/api/products/";

// Importar la funció per recuperar les dades dels productes des de l'API.
import { dadesProducte } from "./producte.js";

// Funció per integrar les dades del producte a la pàgina html.
function incrustarDades(dades) {
  // Mostrar en consola totes les dades dels productes.
  console.log(dades);

  // Obtenir els productes de la cistella des de Local Storage
  let articleSofa = JSON.parse(localStorage.getItem("Cistella", cistell));

  // Mostrar els productes adquirits a la cistella(id, colorSeleccionat i quantitat).
  console.log(articleSofa);

  // Si la cistella està buida canviar el títol <h1>.
  if (articleSofa == null) {
    document.getElementById(
      "titolCistella"
    ).innerHTML += `Votre panier est vide`;
  }
  // Si a la cistella hi han articles, mostrar el títol <h1> d'origen.
  else {
    document.getElementById("titolCistella").innerHTML += `Votre panier`;

    // Bucle per mostrar els articles de la cistella i integrar les dades del producte al HTML.
    for (let i = 0; i < articleSofa.length; i++) {
      document.querySelector(
        "#cart__items"
      ).innerHTML += `<article class="cart__item" data-id="${articleSofa[i].id}" data-color="${articleSofa[i].colorSeleccionat}">
       <div class="cart__item__img">
         <img src="${dades[i].imageUrl}" alt="${dades[i].altTxt}">
       </div>
       <div class="cart__item__content">
         <div class="cart__item__content__description">
           <h2>"${dades[i].name}"</h2>
           <p>"${articleSofa[i].colorSeleccionat}"</p>
           <p>"${dades[i].price}" €</p>
         </div>
         <div class="cart__item__content__settings">
           <div class="cart__item__content__settings__quantity">
             <p>Qté : </p>
             <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${articleSofa[i].quantitat}">
           </div>
           <div class="cart__item__content__settings__delete">
             <br/>
             <p class="deleteItem">Supprimer</p>
           </div>
         </div>
       </div>
     </article> `;
    }
  }

  // Funció per canviar quantitats dels productes
  function canviDeQuantitats() {

    // Identificar el botó per canviar la quantitat.
    const botoSelector = document.querySelectorAll("input");

    // Afegir l'esdeveniment al botóSelector.
    botoSelector.addEventListener("change", function () {
      // Cridar POO a la funció per canviar la quantitat d'articles de la Cistella.
      cistell.canviarQuantitat();

      // Obtenir la nova quantitat escollida per l'usuari des de la pàgina cistella HTML.
      let novaQuantitat = parseInt(document.querySelector("itemQuantity"));

      // Mostrar en consola la nova quantitat
      if (!quantitat) {
        console.log("Vous avez choisi " + novaQuantitat + " unités");
      }
    });
  }
  canviDeQuantitats();
}

// =======================================================

// Funció per eliminar articles de la Cistella
//  const eliminar = document.getElementsByClassName("cart__item__content__settings__delete");
//  eliminar.addEventListener ("click", (e) => {
//    cistell.eliminar(articleSofa)
//  });

// obtenirTotalsNumPreu(numero, importTotal)
// document.getElementsByClassName("totalQuantity");

// ====================================================

// let importTotal = [];

// Execució de les funcions.
dadesProducte(urlhost)
  .then((dades) => incrustarDades(dades))
  .then(() => canviDeQuantitats());
