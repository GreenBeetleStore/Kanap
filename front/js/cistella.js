// Importar la classe Cistell.
import { Cistell } from "./gestor_cistella_poo.js";

// Importar la funció per recuperar les dades dels productes des de l'API.
import { dadesProducte } from "./producte.js";

// Funció per integrar les dades de un producte a la pàgina html.
function integrarDades(dades, articleSofa) {
  // ...
  // Insertar l'etiqueta <article> dintre la <section>. Crear node.
  const articleCistella = document.createElement("article");

  // Selecció de l'element PARE i afegir node ARTICLE.
  document.querySelector("#cart__items").appendChild(articleCistella);

  // Atribuïr la Classe de article.
  articleCistella.className = "cart__item";

  // Atribuïr atributs a les etiquetes.
  articleCistella.setAttribute("data-id", articleSofa.id);
  articleCistella.setAttribute("data-color", articleSofa.colorSeleccionat);

  articleCistella.innerHTML = `<div class="cart__item__img">
  <img src="${dades.imageUrl}" alt="${dades.altTxt}">
</div>
<div class="cart__item__content">
  <div class="cart__item__content__description">
    <h2>${dades.name}</h2>
    <p>${articleSofa.colorSeleccionat}</p>
    <p>${dades.price} €</p>
  </div>
  <div class="cart__item__content__settings">
    <div class="cart__item__content__settings__quantity">
      <p>Qté : </p>
      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${articleSofa.quantitat}">
    </div>
    <div class="cart__item__content__settings__delete">
      <p class="deleteItem">Supprimer</p>
    </div>
  </div>
</div>`;

  // Seccionar el botoSuprimir un producte.
  const botoSuprimir = articleCistella.querySelector(".deleteItem");

  // Afegir Botó Suprimir.
  botoSuprimir.addEventListener("click", (event) => {
    event.preventDefault();
    eliminar(articleSofa.id, articleSofa.colorSeleccionat);
  });

  // Seleccionar el botoSelector de quantitat.
  const botoSelector = articleCistella.querySelector(".itemQuantity");

  // Afegir botoSelector.
  botoSelector.addEventListener("change", (event) => {
    const quantitatEscollida = event.target;
    articleSofa.quantitat = quantitatEscollida.value;
    canviarQuantitat(articleSofa.quantitat);
  });
}

// Funció per eliminar un producte i recarregar la pàgina.
function eliminar(id, colorSeleccionat) {
  // ...
  // Cridar la funció eliminar del POO.
  cistell.eliminar({ id, colorSeleccionat });

  // Advertir de la supressió del producte.
  alert("Votre article a été supprimé.");

  // Recarregar la pàgina i retornar valors.
  location.reload();
  return { id, colorSeleccionat };
}

// Funció per canviar les quantitats en cada producte.
function canviarQuantitat(quantitat) {
  // ...
  // Cridar les funcions canviarQuantitat i guardar del POO.
  cistell.canviarQuantitat({ quantitat });
  cistell.guardar();
}

// Funció per obtenir Quantitat i Import TOTALS.
function obtenirTotals(quantitatTotal, importTotal) {
  // ...
  // Cridar la funció obtenirTotalsNumPreu del POO.
  cistell.obtenirTotalsNumPreu(quantitatTotal, importTotal);

  // Seleccionar els ID de Quantitat i Preu TOTALS per inserció HTML.
  let nombreProductes = document.getElementById("#totalQuantity");
  nombreProductes.innerHTML = quantitatTotal;
  // quantitatTotal.innerHTML = getElementById("#totalQuantity");
  let preuTotal = document.getElementById("#totalPrice");
  preuTotal.innerHTML = importTotal;

  obtenirTotals();
  
  console.log(quantitatTotal);
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

  // Bucle per mostrar els articles de la cistella i integrar les dades de cada producte al HTML.
  for (let i = 0; i < cistell.panera.length; i++) {
    dadesProducte(urlhost + cistell.panera[i].id).then((dades) =>
      integrarDades(dades, cistell.panera[i])
    );
  }
}
