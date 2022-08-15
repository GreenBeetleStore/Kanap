// Programació Orientada a Objectes (POO) Gestor de la Cistella

// Declarar la class Cistell i crear un constructor
class Cistell {
  constructor() {
    let cistell = localStorage.getItem("Cistella");
    if (cistell == null) {
      this.cistell = [];
    } else {
      this.cistell = JSON.parse(cistell);
    }
  }
  // Funció per guardar la CLAU(Cistella) i els VALORS(variable: Cistell) de Local Storage
  guardar() {
    localStorage.setItem("Cistella", JSON.stringify(this.cistell));
  }
  // Funció per afegir articles a la Cistella
  afegir(sofa) {
    let trovarProducte = this.cistell.find((pr) => pr.id == sofa.id);
    if (trovarProducte != undefined) {
      trovarProducte.quantitat++;
    } else {
      sofa.quantitat = 1;
      this.cistell.push(sofa);
    }
    this.guardar();
  }
  // Funció per eliminar articles de la Cistella
  eliminar(sofa) {
    this.cistell = this.cistell.filter((pr) => pr.id != sofa.id);
    this.guardar();
  }
  // Funció per canviar la quantitat d'articles de la Cistella
  canviarQuantitat(sofa, quantitat) {
    let trovarProducte = this.cistell.find((pr) => pr.id == sofa.id);
    if (trovarProducte != undefined) {
      trovarProducte.quantitat += quantitat;
      if (trovarProducte.quantitat <= 0) {
        this.eliminar(trovarProducte);
      } else {
        this.guardar();
      }
    }
  }
  // Funció per calcular la quantitat d'articles de la Cistella
  obtenirNumeroDeSofas() {
    let numero = 0;
    for (let sofa of this.cistell) {
      numero += sofa.quantitat;
    }
    return numero;
  }
  // Funció per calcular el preu total de la Cistella
  obtenirPreuTotal() {
    let importTotal = 0;
    for (let sofa of this.cistell) {
      importTotal += sofa.quantitat * sofa.preu;
    }
    return importTotal;
  }
}

export default function () { console.log("Bon treball") };
