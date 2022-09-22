// Importar la classe Cistell.
import { Cistell } from "./gestor_cistella_poo.js";

// Importar la funció per recuperar les dades dels productes amb fetch des de l'API.
import { dadesProducte } from "./producte.js";

// Declarar les variables buides.
let quantitatTotal = 0;
let importTotal = 0;

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
    // ...
    // Crida POO a la funció eliminar producte.
    cistell.eliminar(articleSofa);

    // Advertir de la supressió del producte.
    alert("Votre article a été supprimé.");

    // Recarregar la pàgina.
    location.reload();
  });

  // Seleccionar el botoSelector de quantitat.
  const botoSelector = articleCistella.querySelector(".itemQuantity");

  // Afegir botoSelector.
  botoSelector.addEventListener("change", (event) => {
    // ...
    // Obtenir la quantitat escollida.
    const quantitatEscollida = event.target;
    event.preventDefault();
    articleSofa.quantitat = quantitatEscollida.value;

    // Crida POO a la funció guardar.
    cistell.guardar();

    // Recarregar la pàgina.
    location.reload();
  });

  // Obtenir els valors numèrics dels totals.
  quantitatTotal += parseInt(articleSofa.quantitat);
  importTotal += parseInt(articleSofa.quantitat) * dades.price;

  // Integrar les dades al DOM.
  document.querySelector("#totalQuantity").innerHTML = quantitatTotal;
  document.querySelector("#totalPrice").innerHTML = importTotal;
}
// 🆗 ^^^^^^ ⏫ = Fi de la Funció integrarDades = ⏫ ^^^^^^^ 🆗

// 💹 Selecció del Bloc de tot el Formulari 💹.
const blocFormulari = document.querySelector(".cart__order__form");

// Declarar les variables dades de contacte.
let firstName = "";
let lastName = "";
let address = "";
let city = "";
let email = "";

// 1️⃣ Nom a l'escolta 🎧 d'un esdeveniment 1️⃣. Prénom.
blocFormulari.firstName.addEventListener("change", function () {
  nomValidar(this);
});

// Declarar variable Nom i funció per validar.
const nomValidar = function (inputNom) {
  // ...
  // Crear Regex per validar el Nom.
  let identRegex = /^[A-Za-zÇçÑñáàâéèêíïîóòôúüÁÀÉÈÍÓÒÚ'·ª-]+$/gm;

  // Selecció de l'element <p> següent al input.
  let smsNom = inputNom.nextElementSibling;

  // Test de l'expressió regular Nom (identRegex).
  if (identRegex.test(inputNom.value)) {
    smsNom.innerHTML = "Prénom Valide.";
    smsNom.classList.add("text-success");
    let nom = inputNom.value;
    firstName = nom;
    return true;
  } else {
    smsNom.innerHTML = "Prénom Non Valide.";
    smsNom.classList.remove("text-success");
    return false;
  }
};

// 2️⃣ Cognom a l'escolta 🎧 d'un esdeveniment 2️⃣. Nom.
blocFormulari.lastName.addEventListener("change", function () {
  cognomValidar(this);
});

// Declarar variable Cognom i funció per validar.
const cognomValidar = function (inputCognom) {
  // ...
  // Utilitzar el mateix Regex que per validar el Nom (identRegex).
  let identRegex = /^[A-Za-zÇçÑñáàâéèêíïîóòôúüÁÀÉÈÍÓÒÚ'·ª-]+$/gm;

  // Selecció de l'element <p> següent al input.
  let smsCognom = inputCognom.nextElementSibling;

  // Test de l'expressió regular Cognom (identRegex).
  if (identRegex.test(inputCognom.value)) {
    smsCognom.innerHTML = "Nom Valide.";
    smsCognom.classList.add("text-success");
    let cognom = inputCognom.value;
    lastName = cognom;
    return true;
  } else {
    smsCognom.innerHTML = "Nom Non Valide.";
    smsCognom.classList.remove("text-success");
    return false;
  }
};

// 3️⃣ Adreça a l'escolta 🎧 d'un esdeveniment 3️⃣. Adresse.
blocFormulari.address.addEventListener("change", function () {
  adreçaValidar(this);
});

// Declarar variable Adreça i funció per validar.
const adreçaValidar = function (inputAdreça) {
  // ...
  // Crear Regex per validar l'Adreça.
  let adreçaRegex =
    /^[0-9]{1,4}(?:(?:[·,._ -]){1}[-a-zA-Z0-9\(\)"ªàáâäéèêëíïîóòôöúùûüÇçÑñ\., ·]+)+$/gm;

  // Selecció de l'element <p> següent al input.
  let smsAdreça = inputAdreça.nextElementSibling;

  // Test de l'expressió regular Adreça (adreçaRegex).
  if (adreçaRegex.test(inputAdreça.value)) {
    smsAdreça.innerHTML = "Adresse Valide.";
    smsAdreça.classList.add("text-success");
    let adreça = inputAdreça.value;
    address = adreça;
    return true;
  } else {
    smsAdreça.innerHTML =
      "Adresse Non valide!. Exemple de format à utiliser: Nº, Type de voie et Nom de voie.";
    smsAdreça.classList.remove("text-success");
    return false;
  }
};

// 4️⃣ Ciutat a l'escolta 🎧 d'un esdeveniment 4️⃣. Ville.
blocFormulari.city.addEventListener("change", function () {
  ciutatValidar(this);
});

// Declarar variable Ciutat i funció per validar.
const ciutatValidar = function (inputCiutat) {
  // ...
  // Crear Regex per validar la Ciutat.
  let ciutatRegex =
    /^[0-9]{5}(?:(?:[·,._ -]){1}[-a-zA-Z\(\)"ªàáâäéèêëíïîóòôöúùûüÇçÑñ\., ·]+)+$/gm;

  // Selecció de l'element <p> següent al input.
  let smsCiutat = inputCiutat.nextElementSibling;

  // Test de l'expressió regular Ciutat (ciutatRegex).
  if (ciutatRegex.test(inputCiutat.value)) {
    smsCiutat.innerHTML = "Ville Valide.";
    smsCiutat.classList.add("text-success");
    let ciutat = inputCiutat.value;
    city = ciutat;
    return true;
  } else {
    smsCiutat.innerHTML =
      "Ville Non valide!. Exemple de format à utiliser: Code Postal et Nom de la Ville.";
    smsCiutat.classList.remove("text-success");
    return false;
  }
};

// 5️⃣ Email a l'escolta 🎧 d'un esdeveniment 5️⃣. Email.
blocFormulari.email.addEventListener("change", function () {
  emailValidar(this);
});

// Declarar variable Email i funció per validar.
const emailValidar = function (inputEmail) {
  // ...
  // Crear Regex per validar l'Email.
  let emailRegex =
    /^[a-zA-Z0-9-çÇñÑ·.!#$%&'*+\/=?^_`{|}~-]+[@]{1}[a-zA-Z0-9-çÇñÑ·!#$%&'*+\/=?^_`{|}~-]+[.]{1}[a-zA-Z0-9-]{2,10}$/gm;

  // Selecció de l'element <p> següent al input.
  let smsEmail = inputEmail.nextElementSibling;

  // Test de l'expressió regular Email (emailRegex).
  if (emailRegex.test(inputEmail.value)) {
    smsEmail.innerHTML = "Email Valide.";
    smsEmail.classList.add("text-success");
    let correu = inputEmail.value;
    email = correu;
    return true;
  } else {
    smsEmail.innerHTML =
      "Email Non valide!. Veuillez saisir un format d'e-mail valide.";
    smsEmail.classList.remove("text-success");
    return false;
  }
};

// Botó Formulari 💹 a l'escolta 🎧 d'esdeveniment per enviar 🔀 dades.
blocFormulari.addEventListener("submit", async function (e) {
  // Ficar en Stand-By fins obtenir l'esdeveniment.
  e.preventDefault();

  // Crear una condició per verificar que totes les dades entrades son correctes.
  if (
    nomValidar(blocFormulari.firstName) &&
    cognomValidar(blocFormulari.lastName) &&
    adreçaValidar(blocFormulari.address) &&
    ciutatValidar(blocFormulari.city) &&
    emailValidar(blocFormulari.email)
  ) {
    // Agrupar les dues Arrays per enviar a l'API.
    let comanda = {
      products,
      contact: { firstName, lastName, address, city, email },
    };

    // Presentar les dades.
    alert(
      "Votre commande a été confirmée.\nLes Id de vos produits et vos coordonnées sont :\n" +
        JSON.stringify(comanda)
    );

    // Cridem a la funció.
    fetchPost(comanda);
  }
});

// Sol·licitud POST per enviar "contact i products". Recuperar l'ID de Comanda dintre de l'API.
function fetchPost(comanda) {
  fetch("http://localhost:3000/api/products/order/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comanda),
  })
    .then((response) => {
      return response.json();
    })
    .then((respostaJson) => {
      console.log(respostaJson);
      const orderId = respostaJson.orderId;
      alert("Votre Nº de commande est: \n\n" + orderId);

      // Continuar cap a la pàgina Confirmació enviant id=orderId per a l'URL.
      window.location.href = "confirmation.html?id=" + orderId;
      Storage.clear();
    })
    .catch((error) => console.error("Error: ", error));
}

// Crear un objecte amb la clase Cistell.
const cistell = new Cistell();

// Adreça API.
const urlhost = "http://localhost:3000/api/products/";

// Delarar l'array per recollir només les ID Producte.
let products = [];

// Si la cistella està buida canviar el títol <h1>.
if (cistell.panera.length == 0) {
  document.getElementById("titolCistella").innerHTML += `Votre panier est vide`;
}
// Si a la cistella hi han articles, mostrar el títol <h1> d'origen.
else {
  document.getElementById("titolCistella").innerHTML += `Votre panier`;

  // Bucle per mostrar els articles de la cistella i integrar les dades de cada producte al HTML.
  for (let articleSofa of cistell.panera) {
    dadesProducte(urlhost + articleSofa.id).then((dades) =>
      integrarDades(dades, articleSofa)
    );
    // Recuperar només les id de producte i afegir-ho a products.
    products.push(articleSofa.id);
  }
}
