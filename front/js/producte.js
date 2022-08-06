  // Recupera la URL de la pàgina actual
  const consultaStringUrlId = window.location.href;

  // Declara la nova variable d'URL
  const url = new URL(consultaStringUrlId);

  // Retorna un objecte URLSearchParams permetent l'accés als arguments de la consulta get, en aquest cas "id"
  const id = url.searchParams.get("id");
  console.log(id);

  // L'adreça API + id
  const urlhost = "http://localhost:3000/api/products/" + id; 

// Capturar les dades dels productes amb l'API Fetch
let dadesRecull = function() {
	fetch (urlhost)
	.then(resposta => resposta.json())
	.then((dades) => { 
    
    //Mostra totes les característiques del producte
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

    // Idem, color del producte. Html:70 i 71
      // Atenció: la característica colors= Array dins Array Principal. Crear variable i bucle per presentar valors disponibles.
    let colorProducte = document.getElementById ("colors");
    for (i=0; i < dades.colors.length; i++) {
      colorProducte.innerHTML += `<option value="${dades.colors[i]}"> ${dades.colors[i]} </option>`;
    }
    // Mostra en consola els colors disponibles del article
    console.log(dades.colors)

    // Funció obtenir el valor seleccionat de la llista desplegable de color
    document.getElementById("addToCart").onclick = 
    function colorKanap() {
      let colorSeleccionat = document.getElementById("colors");
      let value = colorSeleccionat.options[colorSeleccionat.selectedIndex].value;

      // Mostra el color seleccionat
      console.log(value);
    }

    // Obtenir el valor seleccionat de la llista desplegable de quantitat
    function quantitatKanap() {
      let quantitat = document.getElementById("quantity");
      let value = quantitat.options[quantitat.selectedIndex].value;
      quantitat.innerHTML += quantity.value;
    

      // =======================================================

      // ATENCIÓ !!!: No sé si FUNCIONA perquè la quantitat no apareix:
      console.log(value);
      alert("quantitat");

      // =======================================================


    }
  });
};

// Crida a la variable dadesRecull ¿És correcta la posició?
dadesRecull ();




// Botó afegeix a la cistella
const botoCistella = document.getElementById("addToCart");
botoCistella.addEventListener("click", () =>{
  window.location //.href = "./cart.html";

  // ==============================================================
  // OBJECTE = Local Storage

  // Declarar variable per guardar la CLAU i els VALORS de local storage
  let productesLocalStorage = JSON.parse(localStorage.getItem("objecte"));

  console.log(productesLocalStorage);



  // Funció finestra de confirmació popup
  // =======================================================
  // const popupConfirmació = () =>{
  //   if(window.confirm(`${dadesRecull.nomProducte} option: ${colorSeleccionat} a été ajouté au panier 
  //   Aller au panier OK ou revenir a l'accueil RETOUR`)){
  //     window.location.href = "./cart.html";
  //   }else{
  //     window.location.href = "./index.html";
  //   }
  // }
// =======================================================



  // Si(ja hi han productes dins de local storage)
  if(productesLocalStorage){
    productesLocalStorage.push([id]);
    localStorage.setItem("objecte",JSON.stringify(productesLocalStorage));
    // popupConfirmació();

    console.log(productesLocalStorage);
  }

  // Si No (hi han productes dins de local storage)
  else{
    productesLocalStorage = [];
    productesLocalStorage.push(dadesRecull); // 92: Tinc un dubte entre "dadesRecull" i "dades", o una altra variable ???
    localStorage.setItem("objecte",JSON.stringify(productesLocalStorage));
    // popupConfirmació();

    console.log(productesLocalStorage);
  }
  // ==============================================================

});