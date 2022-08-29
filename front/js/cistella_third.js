// Importar la classe Cistell.
import { Cistell } from "./gestor_cistella_poo.js";

// Importar la funció per recuperar les dades dels productes des de l'API.
import { dadesProducte } from "./producte.js";
// ================== Fins aquí les importacions ============================= =============================================================================================================================================================

// Funció per integrar les dades de un producte a la pàgina html.
function integrarDades(dades, articleSofa) {

  // Insertar l'etiqueta <article> dintre la <section>
  // Crear nodes.
  const articleCistella = document.createElement("article");
  // Selecció de l'element PARE i afegir node ARTICLE.
  document.querySelector("#cart__items").appendChild(articleCistella);
  // Atribuïr la Classe.
  articleCistella.className = "cart__item";
  // Atribuïr atributs a les TAGS.
  articleCistella.setAttribute('data-id', articleSofa.id);
  articleCistella.setAttribute('data-color', articleSofa.colorSeleccionat);

  // Afegir <div> de la Foto i la seva descripció.
  const divFoto = document.createElement('div');
  articleCistella.appendChild(divFoto);
  divFoto.className = 'cart__item__img';
  // Afegir Foto i descripció Alt.
  const sofaFoto = document.createElement('img');
  divFoto.appendChild(sofaFoto);
  sofaFoto.src = dades.imageUrl;
  sofaFoto.alt = dades.altTxt;

  // Afegir <div> dels continguts per al producte.
  const divContinguts = document.createElement('div');
  articleCistella.appendChild(divContinguts);
  divContinguts.className = 'cart__item__content';

    // Afegir <div> descripció dels continguts.
    const divContingutsDescripcio = document.createElement('div');
    divContinguts.appendChild(divContingutsDescripcio);
    divContingutsDescripcio.className = 'cart__item__content__description';

      // Afegir continguts <h2> + <p> + <p>.
      const sofaTitol = document.createElement('h2');      
      divContingutsDescripcio.appendChild(sofaTitol);
      sofaTitol.append(dades.name);
      const sofaColor = document.createElement('p');
      divContingutsDescripcio.appendChild(sofaColor);
      sofaColor.append(articleSofa.colorSeleccionat);
      const sofaPreu = document.createElement('p');
      divContingutsDescripcio.appendChild(sofaPreu);
      sofaPreu.append(dades.price + ' €');

    // Afegir <div> configuració dels continguts.
    const divContingutsConfiguracio = document.createElement('div');
    divContinguts.appendChild(divContingutsConfiguracio);
    divContingutsConfiguracio.className = 'cart__item__content__settings';

      // Afegir <div> input quantitat.
      const divContingutsConfiguracioQuantitat = document.createElement('div');
      divContingutsConfiguracio.appendChild(divContingutsConfiguracioQuantitat);
      divContingutsConfiguracioQuantitat.className = 'cart__item__content__settings__quantity';

      // Afegir configuracions "Quantitat" i "Botó Selector de Canviar Quantitat".
      const sofaQuantitat = document.createElement('p');
      divContingutsConfiguracioQuantitat.appendChild(sofaQuantitat);
      sofaQuantitat.append('Qté : ');
        const botoSelector = document.createElement('input');
        divContingutsConfiguracioQuantitat.appendChild(botoSelector);
        botoSelector.className = 'itemQuantity';
        botoSelector.setAttribute('type', 'number');
        botoSelector.setAttribute('min', '1');
        botoSelector.setAttribute('max', '100');
        botoSelector.setAttribute('name', 'itemQuantity');
        botoSelector.setAttribute('value', articleSofa.quantitat);

      
      

      





}

// ============================================================
// A partir d'aqui les funcions d'eliminar i canviar quantitats.
// function eliminar() {
//   // Identificar la classe per al botoSuprimir.
//   const botoSuprimir = document.getElementsByClassName("deleteItem");

//   // Afegir l'esdeveniment al botóSuprimir.
//   botoSuprimir.addEventListener("click", (event) => {
//     console.log("ok");
//     cistell.eliminar();
//   });
// }

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
