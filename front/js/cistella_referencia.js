// Importar la classe Cistell.
import { Cistell } from "./gestor_cistella_poo.js";

// Importar la funció per recuperar les dades dels productes des de l'API.
import { dadesProducte } from "./producte.js";

// Funció per integrar les dades de un producte a la pàgina html.
function integrarDades(dades, articleSofa) {
  // Selecció dels elements PARES.
  const seccioCistella = document.querySelector("#cart__items");

  // Crear nodes.
  const articleCistella = document.cretateElement("article");
  // const sofaId = document.createElement("data-id = '${articleSofa.id}'");
  // const sofaColor = document.createElement(
  //   "data-color = '${articleSofa.colorSeleccionat}'"
  // );
  const divFoto = document.createElement(
    "<div class='cart__item__img'> img src='${dades.imageUrl}' alt = '${dades.altTxt}' </div>"
  );

  // const sofaFotoImatge = document.createElement(
  //   "img src='${dades.imageUrl}' alt = '${dades.altTxt}'"
  // );
  const divContinguts = document.createElement(
    "div class = 'cart__item__content'"
  );
  const divContingutsDescripcio = document.createElement(
    "div class = 'cart__item__content__description'"
  );
  const sofaNom = document.createElement("h2 = '${dades.name}'");
  const sofaColorSeleccionat = document.createElement(
    "p = '${articleSofa.colorSeleccionat}'"
  );
  const sofaPreuUnitari = document.createElement("p = '${dades.price}' €");
  const divContingutsConfiguracions = document.createElement(
    "div class = 'cart__item__content__settings'"
  );
  const divQuantitat = document.createElement(
    "div class = 'cart__item__content__settings__quantity'"
  );
  const sofaQuantitatTexte = document.createElement("p = Qté : ");
  const sofaQuantitat = document.createElement(
    "input type='number' class = 'itemQuantity' name = 'itemQuantity' min='1' max='100' value = '${articleSofa.quantitat}'"
  );
  const divSuprimir = document.createElement(
    "div class = 'cart__item__content__settings__delete'"
  );
  const sofaSuprimir = document.createElement(
    "p class ='deleteItem' + Supprimer"
  );

  // Afegir nodes.
  seccioCistella.appendChild(articleCistella);
  // articleCistella.appendChild(sofaId);
  // articleCistella.appendChild(sofaColor);
  articleCistella.appendChild(divFoto);
  // divFoto.appendChild(sofaFotoImatge);
  articleCistella.appendChild(divContinguts);
  divContinguts.appendChild(divContingutsDescripcio);
  divContingutsDescripcio.appendChild(sofaNom);
  divContingutsDescripcio.appendChild(sofaColorSeleccionat);
  divContingutsDescripcio.appendChild(sofaPreuUnitari);
  divContinguts.appendChild(divContingutsConfiguracions);
  divContingutsConfiguracions.appendChild(divQuantitat);
  divQuantitat.appendChild(sofaQuantitatTexte);
  divQuantitat.appendChild(sofaQuantitat);
  divContingutsConfiguracions.appendChild(divSuprimir);
  divSuprimir.appendChild(sofaSuprimir);
}

// Atribuïr atributs a les TAGS
seccioCistella.setAttribute("class", "cart__item");

function eliminar() {
  // Identificar la classe per al botoSuprimir.
  const botoSuprimir = document.getElementsByClassName("deleteItem");

  // Afegir l'esdeveniment al botóSuprimir.
  botoSuprimir.addEventListener("click", (event) => {
    console.log("ok");
    cistell.eliminar();
  });
}

// ================ D'aquí fins a la fí, NO RETOCAR, és OK =====================

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
