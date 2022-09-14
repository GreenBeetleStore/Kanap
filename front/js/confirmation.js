// Declarar variable de la nova URL.
let urlConfirm = new URLSearchParams(window.location.search);
// Recuperació del Nº de comanda des de l'url.
const orderId = urlConfirm.get("id");
// Afegir orderId al HTML.
document.getElementById("orderId").innerHTML += `${orderId}`;
// Eliminar el localStorage.
localStorage.clear();