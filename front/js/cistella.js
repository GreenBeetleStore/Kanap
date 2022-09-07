// Importar la classe Cistell.
import { Cistell } from "./gestor_cistella_poo.js";

// Importar la funció per recuperar les dades dels productes amb fetch des de l'API.
import { dadesProducte } from "./producte.js";

// ⏬ Funció per integrar les dades de un producte a la pàgina html ⏬.
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

  // Inserir dades als elements de articleCistella.
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
    const sofaEliminat = event.target;
    articleSofa.id = sofaEliminat;
    articleSofa.colorSeleccionat = sofaEliminat;
    eliminar(articleSofa.id, articleSofa.colorSeleccionat);
  });

  // Seleccionar el botoSelector de quantitat.
  const botoSelector = articleCistella.querySelector(".itemQuantity");

  // Afegir botoSelector.
  botoSelector.addEventListener("change", (event) => {
    const quantitatEscollida = event.target;
    event.preventDefault();
    articleSofa.quantitat = quantitatEscollida.value;
    canviarQuantitat(articleSofa.quantitat);
  });

  // Funció per 🧿calcular la quantitat TOTAL d'articles de la Cistella i Preu TOTAL.
  function obtenirTotals() {
    // Recuperar les dades numèriques de: quantitat i preu individuals.
    articleSofa.quantitat = parseInt(articleSofa.quantitat);
    articleSofa.preuProducte = parseInt(dades.price);
    let quantitatTotal = 0;
    let importTotal = 0;
    // Bucle per calcular els totals.
    for (let articleSofa of cistell.panera) {
      quantitatTotal += articleSofa.quantitat;
      importTotal += articleSofa.quantitat * articleSofa.preuProducte;
    }
    // Integrar les dades al DOM.
    document.querySelector("#totalQuantity").innerHTML = quantitatTotal;
    document.querySelector("#totalPrice").innerHTML = importTotal;

    // Recuperar els totals i guardar al localStorage.
    const totals = [quantitatTotal, importTotal]
    localStorage.setItem("Totals", JSON.stringify(totals));
    return { quantitatTotal, importTotal };
  }
  obtenirTotals();
}
// ^^^^^^^^^^^^^^^^^^^^^^^⏫= Fi de la Funció integrarDades =⏫^^^^^^^^^^^^^^^^^^^^^^^

// Funció per ❌eliminar un producte.
function eliminar(id, colorSeleccionat) {
  // ...
  // Cridar la funció eliminar del POO.
  cistell.eliminar({ id, colorSeleccionat });

  // Advertir de la supressió del producte.
  alert("Votre article a été supprimé.");

  // Recarregar la pàgina.
  location.reload();
}

// Funció per 🔄canviar les quantitats en cada producte.
function canviarQuantitat(quantitat) {
  // ...
  // Cridar les funcions canviarQuantitat i guardar del POO.
  cistell.canviarQuantitat({ quantitat });
  cistell.guardar();
  // Recarregar la pàgina.
  location.reload();
}

/// ==================== 🛠 TALLER 🛠 ==================== ⏳

// Funció per 💹gestionar el formulari.
function formulari() {
  // Selecció de bloc de tot el formulari.
  const blocFormulari = document.querySelector(".cart__order__form");

  // Selecció del Botó per enviar el formulari "botoFormulari".
  const botoFormulari = document.querySelector("#order");

  // eventListeners: Afegir els camps del formulari a l'escolta d'un esdeveniment.

  // Afegir el botoFormulari a l'escolta d'esdeveniment.
  botoFormulari.addEventListener("click", () => {
    event.preventDefault();

    // Capturar els valors introduïts als formulari.
    const Formulari = {
      nom: document.getElementById("firstName").value,
      cognom: document.getElementById("lastName").value,
      adreça: document.getElementById("address").value,
      ciutat: document.getElementById("city").value,
      email: document.getElementById("email")
    }

    // Guardar les dades del client al localStorage.
    localStorage.setItem("DadesClient", JSON.stringify(Formulari));

    // localStorage.setItem("Nom", document.querySelector("#firstName").value);

    console.log(Formulari);
  })

}
formulari();

/// ==================== 🛠 TALLER 🛠 ==================== ⏳

// ❗❗❗ ⬇⬇⬇⬇⬇⬇⬇⬇⬇ 🔰 D'aquí fins a la fí, NO TOCAR 🔰 ⬇⬇⬇⬇⬇⬇⬇⬇⬇ ❗❗❗
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
console.log("Array: cistell.panera: ", cistell.panera);