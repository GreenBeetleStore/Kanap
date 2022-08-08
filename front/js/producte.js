  // Recupera la URL de la pàgina actual
  const consultaStringUrlId = window.location.href;

  // Declara la nova variable d'URL
  const url = new URL(consultaStringUrlId);

  // Retorna un objecte URLSearchParams permetent l'accés als arguments de la consulta get, en aquest cas "id"
  const id = url.searchParams.get("id");
  //Mostra el producte escollit a la pagina index
  console.log(id);

  // L'adreça API + id
  const urlhost = "http://localhost:3000/api/products/" + id; 

// Capturar les dades dels productes amb l'API Fetch
let dadesRecull = function() {
	fetch (urlhost)
	.then(resposta => resposta.json())
	.then((dades) => { 
    
    //Mostra les característiques del producte
    console.log(dades);

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

    // Idem, colors del producte. Html:70 i 71
      // Atenció: la característica colors=Array dins d'Array Principal. Crear variable i bucle per obtenir els valors disponibles.
    let colorProducte = document.getElementById ("colors");
    for (i=0; i < dades.colors.length; i++) {
      colorProducte.innerHTML += `<option value="${dades.colors[i]}"> ${dades.colors[i]} </option>`;
    }
    // Mostra en consola els colors disponibles del producte
    console.log(dades.colors)

    // Botó "Ajouter au panier" a l'escolta, esperant un click
    document.getElementById("addToCart").onclick = 

    // Funció obtenir els valor seleccionats de les llistes desplegables; color i quantitat
    function opcionsKanap() {
      // Obté el color seleccionat
      let colorSeleccionat = document.getElementById("colors");
      let value = colorSeleccionat.options[colorSeleccionat.selectedIndex].value;
      // Mostra el color seleccionat
      console.log(value);
//=================================================================
      // Mostra finestra ADVERTÈNCIA
      if (value == false){
        alert("Vous devez choisir un couleur");
      }
//=================================================================

      // Obtenir el valor seleccionat de la llista desplegable de quantitat. Html: 77
      let quantitatValor = document.getElementById("quantity");
      if (quantitatValor.value != 0 && quantitatValor.value > 0 && quantitatValor.value <= 100) {
        quantitatValor.value.push = quantitatValor.value;
      }
      // Mostra la quantitat seleccionada
      console.log(quantitatValor.value);
//=================================================================
      // Mostra finestra ADVERTÈNCIA
      if (quantitatValor.value == 0){
        alert("Vous devez choisir un nombre");
      }
//=================================================================
    }
  });
}
// Crida a la variable dadesRecull
dadesRecull ();

// Botó afegeix a la cistella
const botoCistella = document.getElementById("addToCart");
botoCistella.addEventListener("click", () =>{
  opcionsKanap();
  // Funció finestra de confirmació popup
  function finestraConfirmació() {
    if (window.confirm("Ajouté au Panier ! . Aller au Panier: Accepter, ou continuer vos achats: Annuler")) {
      window.location; //.href = "./cart.html";
    }else{
      window.location.href = "./index.html";
    }
  }
  
  // ============ OBJECTE-CISTELLA = Local Storage ============

  // Declarar variable per guardar la CLAU i els VALORS de Local Storage
  let productesLocalStorage = JSON.parse(localStorage.getItem("objecteCistella"));

  // Si (ja hi han productes dins de local storage)
  if(productesLocalStorage){
    productesLocalStorage.push([id]);
    localStorage.setItem("objecteCistella",JSON.stringify(productesLocalStorage));
    finestraConfirmació();


    // Mostrarà els articles afegits a LocalStorage a partir del segon article
    console.log(productesLocalStorage);
  }

  // Si No (hi han productes dins de local storage)
  else{
    productesLocalStorage = [];
    productesLocalStorage.push(dadesRecull); // 92: Tinc un dubte entre "dadesRecull" i "dades", o una altra variable ???
    localStorage.setItem("objecteCistella",JSON.stringify(productesLocalStorage));
    finestraConfirmació();

    // Mostrarà el primer producte que s'afegeix a LocalStorage
    console.log(productesLocalStorage);
  }
});