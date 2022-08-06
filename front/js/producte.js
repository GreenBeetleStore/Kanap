  // Recupera la URL de la pàgina actual
  var str = window.location.href;

  // Declara la nova variable d'URL
  var url = new URL(str);

  // Retorna un objecte URLSearchParams permetent l'accés als arguments de la consulta get, en aquest cas "id"
  var id = url.searchParams.get("id");  

  // L'adreça API + id
  const urlhost = "http://localhost:3000/api/products/" + id; 

// Capturar les dades dels productes amb l'API Fetch
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
      colorProducte.innerHTML += `<option value="${dades.colors[i]}"> ${dades.colors[i]} </option>`;
    }
    console.log(dades.colors)


    // Funció obtenir el valor seleccionat de la llista desplegable de color
    document.getElementById("addToCart").onclick = 
    function colorKanap() {
      let colorSeleccionat = document.getElementById("colors");
      let value = colorSeleccionat.options[colorSeleccionat.selectedIndex].value;
      return colorSeleccionat.value;
    }

    // Funció: obtenir el valor seleccionat de la llista desplegable de quantitat
    function quantitatKanap() {
      let quantitat = document.getElementById("quantity");
      return quantitat.value;
    }
  });
};
// Crida a la variable dadesRecull
dadesRecull ();

// ==============================================================
// OBJECTE = Local Storage

// Declarar variable per guardar la CLAU i els VALORS de local storage
let productesLocalStorage = JSON.parse(localStorage.getItem("objecte"));

console.log(productesLocalStorage);

// Si(ja hi han productes dins de local storage)
if(productesLocalStorage){

}

// Si No (hi han productes dins de local storage)
else{
  productesLocalStorage = [];
  productesLocalStorage.push(dadesRecull);
  localStorage.setItem("objecte",JSON.stringify(productesLocalStorage));

  console.log(productesLocalStorage);
}
// ==============================================================

// Botó afegeix a la cistella
const botoCistella = document.getElementById("addToCart");
botoCistella.addEventListener("click", () =>{
  window.location.href = "./cart.html";
});