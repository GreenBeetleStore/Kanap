// Recuperar els valors dels paràmetres de la URL d'entrada 

var str = window.location.href;       // Recupera la URL de la pàgina actual
var url = new URL(str);               // Declara la nova variable d'URL
var id = url.searchParams.get("id");  // Retorna un objecte URLSearchParams permetent l'accés als arguments de la consulta get, en aquest cas "id"
const urlhost = "http://localhost:3000/api/products/" + id; // L'adreça API + id

// Funció per capturar les dades dels productes amb l'API Fetch
let dadesRecull = function() {
	fetch (urlhost)
	.then(resposta => resposta.json())
	.then((dades) => { console.log(dades);

	  // Identificar dins de l'Array, i assignar al codi html la foto i la descripció (alt) de la foto. Html:51
	  let fotoProducte = document.querySelector (".item__img");
	  fotoProducte.innerHTML =`<img src="${dades.imageUrl}" alt="${dades.altTxt}">`;
    
    // Idem, nom del producte. Html:56
    let nomProducte = document.getElementById ("title");
    nomProducte.innerHTML = dades.name;

    // Idem, preu del producte. Html:57
    let preuProducte = document.getElementById ("price");
    preuProducte.innerHTML = dades.price;

    // Idem, descripció del producte. Html:62
    let descripcioProducte = document.getElementById ("description");
    descripcioProducte.innerHTML = dades.description;

    // Idem, color del producte. Html:70 i 71
    // Atenció: la característica colors= Array dins Array Principal. Crear variable i bucle per presentar valors disponibles.
    let colorProducte = document.getElementById ("colors");
    for (i=0; i < dades.colors.length; i++) {
    identitatColor = `<option value="${dades.colors[i]}"> ${dades.colors[i]} </option>`;
    colorProducte.innerHTML += identitatColor;
    }
	});
};
// Crida a la variable dadesRecull
dadesRecull ();

// Html:75 a 78. <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">

// Html:81 a 83 . <button id="addToCart">Ajouter au panier</button>

