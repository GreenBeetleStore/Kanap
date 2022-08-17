// Recupera la URL de la pàgina actual
const consultaStringUrlId = window.location.href;

// Declara la nova variable d'URL
const url = new URL(consultaStringUrlId);

// Retorna un objecte URLSearchParams permetent l'accés als arguments de la consulta get, en aquest cas "id"
const id = url.searchParams.get("id");

// L'adreça API + id
const urlhost = "http://localhost:3000/api/products/" + id;

// Declarar variables globals
let cistella = [];
const colorSeleccionat = document.querySelector("#colors");
const quantitat = document.querySelector("#quantity");

// Capturar les dades dels productes amb l'API Fetch
let dadesRecull = function () {
  fetch(urlhost)
    .then((resposta) => resposta.json())
    .then((dades) => {
      // Mostra les característiques del producte
      // console.log(dades);

      // Declarar variable d'identitat producte
      idProducte = dades._id;

      // Identificar dins de l'Array, i assignar al codi html la foto i la descripció (alt) de la foto. Html:51
      let fotoProducte = document.querySelector(".item__img");
      fotoProducte.innerHTML = `<img src="${dades.imageUrl}" alt="${dades.altTxt}">`;
      fotoProducte = dades.imageUrl;
      altTexte = dades.altTxt;

      // Idem, nom del producte. Html:56
      let nomProducte = document.getElementById("title");
      nomProducte.innerHTML = dades.name;
      nomProducte = dades.name;

      // Idem, preu del producte. Html:57
      let preuProducte = document.getElementById("price");
      preuProducte.innerHTML = dades.price;
      preuProducte = dades.price;

      // Idem, descripció del producte. Html:62
      let descripcioProducte = document.getElementById("description");
      descripcioProducte.innerHTML = dades.description;
      descripcioProducte = dades.description;

      // Idem, colors del producte. Html:70 i 71. Crear variable i bucle per obtenir els valors disponibles.
      let colorProducte = document.getElementById("colors");
      for (i = 0; i < dades.colors.length; i++) {
        colorProducte.innerHTML += `<option value="${dades.colors[i]}"> ${dades.colors[i]} </option>`;
      }
      // Mostra en consola els colors disponibles del producte
      console.log(dades.colors);
    });
};
// Crida a la variable dadesRecull
dadesRecull();

// Botó afegeix a la cistella a l'escolta, esperant un click
const botoCistella = document.getElementById("addToCart");
botoCistella.addEventListener("click", (e) => {
  // Obté el color seleccionat
  let colorSeleccionat = document.getElementById("colors");
  let value = colorSeleccionat.options[colorSeleccionat.selectedIndex].value;
  // Mostra el color seleccionat
  colorSeleccionat = value;
  console.log(colorSeleccionat);
  // Mostra finestra ADVERTÈNCIA COLOR
  if (value == false) {
    alert("Vous devez choisir un couleur");
    colorSeleccionat = false;
    return;
  }

  // Obtenir la quantitat seleccionada. Html: 77
  let quantitat = document.getElementById("quantity");
  if (quantitat.value != 0 && quantitat.value > 0 && quantitat.value <= 100) {
    // Mostra la quantitat seleccionada
    quantitat = quantitat.value;
    console.log(quantitat);
  } else {
    // Mostra finestra ADVERTÈNCIA QUANTITAT
    if (quantitat.value == 0) {
      alert("Vous devez choisir un nombre");
      quantitat = false;
      return;
    }
  }

  // ============ OBJECTE-CISTELLA & Local Storage ============

  let dadesArticle = [idProducte, colorSeleccionat, quantitat];

  // Funció per guardar la CLAU(Cistella) i els VALORS(variable: Cistell) de Local Storage
  function guardarCistella(dadesLocalStorage) {
    localStorage.setItem("Cistella", JSON.stringify(dadesLocalStorage));
  }

  // Declarar variable per guardar la CLAU i els VALORS de Local Storage
  let dadesLocalStorage = JSON.parse(localStorage.getItem("Cistella"));
  console.log(dadesLocalStorage);

  // Si (ja hi han productes dins de local storage)
  if (dadesLocalStorage) {
    dadesLocalStorage.push(dadesArticle);
    localStorage.setItem("Cistella", JSON.stringify(dadesLocalStorage));

    // Afegir productes sumant quantitats si son iguals
    let trovarProducte =
      dadesLocalStorage.find(
        (pr) => pr.idProducte == dadesArticle.idProducte
      ) && ((pr) => pr.colorSeleccionat == dadesArticle.colorSeleccionat);
    if (trovarProducte != undefined) {
      trovarProducte.quantitat++;
    } else {
      dadesArticle.quantitat = 1;
      dadesLocalStorage.push(dadesArticle);
    }
    finestraConfirmació();
    guardarCistella(dadesLocalStorage);
  }

  // Si No (hi han productes dins de local storage)
  else {
    dadesLocalStorage = [];
    dadesLocalStorage.push(dadesArticle);
    localStorage.setItem("Cistella", JSON.stringify(dadesLocalStorage));
    finestraConfirmació();
    guardarCistella(dadesLocalStorage);
  }

  // Funció finestra de confirmació popup
  function finestraConfirmació() {
    if (
      window.confirm(
        "Votre article a bien été ajouté au Panier !.                                                                    Pour aller directement au panier appuyez sur:      Accepter.                                          Ou si vous souhaitez continuer vos achats, appuyez sur:     Annuler"
      )
    ) {
      window.location.href; // = "./cart.html";
    } else {
      window.location.href = "./index.html";
    }
  }
});
