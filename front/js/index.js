// Declarar una constant amb l'URL de l'API.
const urlhost = "http://localhost:3000/api/products/";

// Funció per capturar les dades dels productes amb l'API Fetch.
let dadesRecull = function () {
  fetch(urlhost)
    .then((resposta) => resposta.json())
    .then((dades) => {
      console.log(dades);

      // Recuperar els detalls dels productes dins de l'API, assignant-los al HTML.
      let caracteristiques = document.getElementById("items");
      for (i = 0; i < dades.length; i++) {
        const identitatProducte = `<a href="./product.html?id=${dades[i]._id}">
            <article>
              <img src="${dades[i].imageUrl}" alt="${dades[i].altTxt}", "${dades[i].name}">
              <h3 class="productName">${dades[i].name}</h3>
              <p class="productDescription">${dades[i].description}</p>
            </article>
            </a>`;
        caracteristiques.innerHTML += identitatProducte;
      }
    })
    .catch(err => alert("Désolés !\nL'API n'est pas disponible pour le moment. \nVeuillez réessayer plus tard."));
};
// Crida a la variable dadesRecull.
dadesRecull();