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
      console.log(dades);
      // Obtenir els productes de la cistella des de Local Storage
      let articleSofa = JSON.parse(localStorage.getItem("Cistella", cistell));
      // Mostra els productes adquirits a la cistella
      console.log(articleSofa);

      // Si la cistella està buida canvia el títol <h1>
      if (articleSofa == null) {
        document.getElementById(
          "titolCistella"
        ).innerHTML += `Votre panier est vide`;
      }
      // Si la cistella conté articles <h1> d'origen
      else {
        document.getElementById("titolCistella").innerHTML += `Votre panier`;

        // Bucle per mostrar els articles de la cistella. Adjuntem les característiques del producte al HTML
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

          // Funció per canviar la quantitat d'articles de la Cistella en escolta del botó de l'input
          let botoSelector = document.querySelector(
            "input",
            articleSofa[i].quantitat
          );
          let novaQuantitat = document.getElementsByClassName(".itemQuantity");
          
          botoSelector.addEventListener("change", (e) => {
            cistell.canviarQuantitat(articleSofa[i].quantitat);
            for (let i = 0; i < articleSofa[i].quantitat.length; i++);
            
            return (articleSofa.quantitat);
          });
          // novaQuantitat.number = e.target.value;
          console.log(novaQuantitat);
          console.log(articleSofa[i].quantitat);

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
        }
      }
    });
};
// Crida a la variable dadesRecull
dadesRecull();
