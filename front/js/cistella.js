console.log(localStorage);
// Importar la classe Cistell
import { Cistell } from "./gestor_cistella_poo.js";
// Creació d'un objecte de la clase Cistell.
// Es a partir d'aquí que podríem cridar a les diferents funcions de la classe, per exemple la función 'guardar()'
const cistell = new Cistell();
// Ara ja podem explotar les funcions de la classe cridant a 'cistell.guardar()' per exemple

// Recupera la URL de la pàgina actual
const consultaStringUrlId = window.location.href;

// Declara la nova variable d'URL
const url = new URL(consultaStringUrlId);

// Retorna un objecte URLSearchParams permetent l'accés als arguments de la consulta get, en aquest cas "id"
const id = url.searchParams.get("id");

// L'adreça API + id
const urlhost = "http://localhost:3000/api/products/";

// Capturar les dades dels productes amb l'API Fetch
let dadesRecull = function () {
  fetch(urlhost)
    .then((resposta) => resposta.json())
    .then((dades) => {
      // Obtenir els productes de la cistella des de Local Storage
      let articleSofa = JSON.parse(localStorage.getItem("Cistella", cistell));
      // Mostra els productes adquirits a la cistella
      console.log(articleSofa);

      // let articleSofa = { id, colorSeleccionat, quantitat };
      // Si la cistella està buida canvia el títol <h1>
      if (articleSofa == null) {
        document.getElementById(
          "titolCistella"
        ).innerHTML += `Votre panier est vide`;
      }
      // Si la cistella conté articles <h1> d'origen
      else {
        document.getElementById("titolCistella").innerHTML += `Votre panier`;

        // Bucle per mostrar els articles de la cistella
        for (let i = 0; i < articleSofa.length; i++) {
          document.querySelector(
            "#cart__items"
          ).innerHTML += `<article class="cart__item" data-id="${articleSofa[i].id}" data-color="${articleSofa[i].colorSeleccionat}">
       <div class="cart__item__img">
         <img src="${articleSofa[i].fotoProducte}" alt="${articleSofa[i].altTexte}">
       </div>
       <div class="cart__item__content">
         <div class="cart__item__content__description">
           <h2>"${articleSofa[i].nomProducte}"</h2>
           <p>"${articleSofa[i].colorSeleccionat}"</p>
           <p>"${articleSofa[i].preuProducte}" €</p>
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
    });
};
// Crida a la variable dadesRecull
dadesRecull();

/**
 * [id],
 * [nomProducte],
 * [preuProducte],
 * [fotoProducte],
 * [altTexte],
 * [descripcioProducte],
 * [colorSeleccionat],
 * [quantitatValor]
 */
