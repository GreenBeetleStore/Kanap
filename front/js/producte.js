// Importar la classe Cistell.
import { Cistell } from "./gestor_cistella_poo.js";

// Crear un objecte amb la clase Cistell per poder cridar i utilitzar les diferents funcions de la classe, per exemple: cridar la funció 'cistell.guardar()'.
const cistell = new Cistell();

// Recuperar la URL en la pàgina actual.
const consultaStringUrlId = window.location.href;

// Declarar la nova variable d'URL.
const url = new URL(consultaStringUrlId);

// Retornar un objecte URLSearchParams permetent l'accés als arguments de la consulta get, en aquest cas "id".
const id = url.searchParams.get("id");

// Adreça API + id.
const urlhost = "http://localhost:3000/api/products/" + id;

// Exportem aquesta funció, que recupera les dades del producte des de l'API, per poder reutilitzar-la des de qualsevol altre script.
export function dadesProducte(urlhost) {
  return fetch(urlhost)
    .then((resposta) => resposta.json())
    .catch((err) =>
      alert(
        "Désolés !\nL'API n'est pas disponible pour le moment. \nVeuillez réessayer plus tard."
      )
    );
}

// Funció per integrar les dades del producte al HTML.
function integrarDades(dades) {
  // ...
  // Identificar dins l'Array, i assignar al HTML la foto i la descripció (alt). Html:51.
  let fotoProducte = document.querySelector(".item__img");
  fotoProducte.innerHTML = `<img src="${dades.imageUrl}" alt="${dades.altTxt}">`;

  // Idem, nom del producte. Html:56.
  let nomProducte = document.getElementById("title");
  nomProducte.innerHTML = dades.name;

  // Idem, preu del producte. Html:57.
  let preuProducte = document.getElementById("price");
  preuProducte.innerHTML = dades.price;

  // Idem, descripció del producte. Html:62.
  let descripcioProducte = document.getElementById("description");
  descripcioProducte.innerHTML = dades.description;

  // Idem, colors del producte. Html:70 i 71.
  let colorProducte = document.getElementById("colors");

  // Bucle per obtenir els valors de colors disponibles.
  for (let i = 0; i < dades.colors.length; i++) {
    colorProducte.innerHTML += `<option value="${dades.colors[i]}">${dades.colors[i]}</option>`;
  }
}

// Funció per afegir un receptor d'esdeveniments al botó d'afegir a la cistella.
function afegirACistella() {
  // ...
  // Identificar el botó d'afegir a la cistella.
  const botoCistella = document.getElementById("addToCart");

  // Afegir un esdeveniment al botó d'afegir a la cistella.
  botoCistella.addEventListener("click", function () {
    // ...
    // Obtenir el color seleccionat
    let colorSeleccionat = document.getElementById("colors").value;

    // Mostra finestra ADVERTÈNCIA COLOR NO SELECCIONAT.
    if (!colorSeleccionat) {
      alert("Vous devez choisir une couleur !");
      return;
    }

    // Obtenir la quantitat seleccionada. Html: 77.
    let quantitat = parseInt(document.getElementById("quantity").value);

    // Mostra finestra ADVERTÈNCIA INTRODUÏR QUANTITAT.
    if (!(quantitat > 0 && quantitat <= 100)) {
      alert("Vous devez choisir une quantité comprise entre 1 et 100 !");
      return;
    }

    // Declarar variable del objecte amb els elements a guardar al LocalStorage.
    let articleSofa = { id, colorSeleccionat, quantitat };

    // Cridar POO a la funció afegir producte.
    cistell.afegir(articleSofa);

    // Cridar a la funció de la finestra de confirmació.
    finestraConfirmació();
  });
}

// Funció finestra de confirmació popup.
function finestraConfirmació() {
  if (
    window.confirm(
      "Votre article a bien été ajouté au Panier !.\nPour aller directement au panier appuyez sur:      Accepter.\nOu si vous souhaitez continuer vos achats, appuyez sur:     Annuler"
    )
  ) {
    // Opció per anar a la pàgina de la cistella.
    window.location.href = "./cart.html";

    // Opció per tornar a la pàgina index.
  } else {
    window.location.href = "./index.html";
  }
}

// Execució de les funcions.
dadesProducte(urlhost)
  .then((dades) => integrarDades(dades))
  .then(() => afegirACistella());