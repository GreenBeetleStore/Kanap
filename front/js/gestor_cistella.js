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
function afegirACistella(sofa) {
  let cistell = obtenirCistella();
  let trovarProducte = cistell.find((pr) => pr.id == sofa.id);
  if (trovarProducte != undefined) {
    trovarProducte.quantitat++;
  } else {
    sofa.quantitat = 1;
    cistell.push(sofa);
  }
  guardarCistella(cistell);
}

// Funció per eliminar articles de la Cistella
function eliminarDeCistella(sofa) {
  let cistell = obtenirCistella();
  cistell = cistell.filter((pr) => pr.id != sofa.id);
  guardarCistella(cistell);
}

// Funció per canviar la quantitat d'articles de la Cistella
function canviarQuantitat(sofa, quantitat) {
  let cistell = obtenirCistella();
  let trovarProducte = cistell.find((pr) => pr.id == sofa.id);
  if (trovarProducte != undefined) {
    trovarProducte.quantitat += quantitat;
    if (trovarProducte.quantitat <= 0) {
      eliminarDeCistella(trovarProducte);
    } else {
      guardarCistella(cistell);
    }
  }
}

// Funció per calcular la quantitat d'articles de la Cistella
function obtenirNumeroDeSofas() {
  let cistell = obtenirCistella();
  let numero = 0;
  for (let sofa of cistell) {
    numero += sofa.quantitat;
  }
  return numero;
}

// Funció per calcular el preu total de la Cistella
function obtenirPreuTotal() {
  let cistell = obtenirCistella();
  let importTotal = 0;
  for (let sofa of cistell) {
    importTotal += sofa.quantitat * sofa.preu;
  }
  return importTotal;
}
