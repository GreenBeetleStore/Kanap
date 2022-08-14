// Recupera la URL de la pàgina actual
const consultaStringUrlId = window.location.href;

// Declara la nova variable d'URL
const url = new URL(consultaStringUrlId);

// Retorna un objecte URLSearchParams permetent l'accés als arguments de la consulta get, en aquest cas "id"
const id = url.searchParams.get("id");
//Mostra el ID producte escollit a la pagina index
console.log(id);

// L'adreça API + id
const urlhost = "http://localhost:3000/api/products/" + id;

// Capturar les dades dels productes amb l'API Fetch
let dadesRecull = function () {
  fetch(urlhost)
    .then((resposta) => resposta.json())
    .then((dades) => {
      //Mostra les característiques del producte
      console.log(dades);

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

      // Idem, colors del producte. Html:70 i 71
      // Atenció: la característica colors=Array dins d'Array Principal. Crear variable i bucle per obtenir els valors disponibles.
      let colorProducte = document.getElementById("colors");
      for (i = 0; i < dades.colors.length; i++) {
        colorProducte.innerHTML += `<option value="${dades.colors[i]}"> ${dades.colors[i]} </option>`;
      }
      // Mostra en consola els colors disponibles del producte
      console.log(dades.colors);
    

  // Botó afegeix a la cistella a l'escolta, esperant un click
  const botoCistella = document.getElementById("addToCart");
  document.getElementById("addToCart").onclick =
    // Funció obtenir els valor seleccionats de les llistes desplegables; color i quantitat
    function opcionsKanap() {
      // Obté el color seleccionat
      let colorSeleccionat = document.getElementById("colors");
      let value =
        colorSeleccionat.options[colorSeleccionat.selectedIndex].value;
      // Mostra el color seleccionat
      colorSeleccionat = value;
      console.log(colorSeleccionat);
      // Mostra finestra ADVERTÈNCIA COLOR
      if (value == false) {
        alert("Vous devez choisir un couleur");
        colorSeleccionat = false;
        return;
      }

      // Obtenir el valor seleccionat de la llista desplegable de quantitat. Html: 77
      let quantitatValor = document.getElementById("quantity");
      if (
        quantitatValor.value != 0 &&
        quantitatValor.value > 0 &&
        quantitatValor.value <= 100
      ) {
        // Mostra la quantitat seleccionada
        console.log(quantitatValor.value);
        quantitatValor = quantitatValor.value;
      } else {
        // Mostra finestra ADVERTÈNCIA QUANTITAT
        if (quantitatValor.value == 0) {
          alert("Vous devez choisir un nombre");
          quantitatValor = false;
          return;
        }
      }
      
      // ============ OBJECTE-CISTELLA = Local Storage ============

      



    };

  });
};
// Crida a la variable dadesRecull
dadesRecull();


      // Funció per guardar la CLAU(Cistella) i els VALORS(variable: Cistell) de Local Storage
      function guardarCistella(cistell) {
        localStorage.setItem("Cistella", JSON.stringify(cistell));
      }

      // Funció per recuperar els valors que porten la CLAU(Cistella)
      function obtenirCistella() {
        let cistell = localStorage.getItem("Cistella");
        if (cistell == null) {
          return [];
        } else {
          return JSON.parse(cistell);
        }
      }

      // Funció per afegir articles a la Cistella
      function afegirACistella(Sofa) {
        let cistell = obtenirCistella();
        cistell.push(Sofa);
        // if (cistell) {
        //   cistell.push([idProducte], [colorSeleccionat], [quantitatValor]);
        //   localStorage.setItem("Cistella", JSON.stringify(cistell));
        finestraConfirmació();

        //   // Mostrarà els articles afegits a LocalStorage a partir del segon article
        //   console.log(localStorage);
        // } else {
        //   cistell.push([idProducte], [colorSeleccionat], [quantitatValor]);
        //   localStorage.setItem("Cistella", JSON.stringify(cistell));
        //   finestraConfirmació();

        //   // Mostrarà el primer producte que s'afegeix a LocalStorage
        //   console.log(localStorage);
        // }
        guardarCistella(cistell);
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