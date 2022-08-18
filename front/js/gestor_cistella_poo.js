// Programació Orientada a Objectes (POO) Gestor de la Cistella

// Declarar la class Cistell i crear un constructor
export class Cistell {
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
  afegir(articleSofa) {
    let trovarProducte = this.cistell.find(
      (pr) =>
        pr.id == articleSofa.id &&
        pr.colorSeleccionat == articleSofa.colorSeleccionat
    );
    if (trovarProducte != undefined) {
      trovarProducte.quantitat += articleSofa.quantitat;
    } else {
      this.cistell.push(articleSofa);
    }
    this.guardar();
  }
  // Funció per eliminar articles de la Cistella
  eliminar(articleSofa) {
    this.cistell = this.cistell.filter((pr) => pr.id != articleSofa.id);
    this.guardar();
  }
  // Funció per canviar la quantitat d'articles de la Cistella
  canviarQuantitat(articleSofa, quantitat) {
    let trovarProducte = this.cistell.find((pr) => pr.id == articleSofa.id);
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
  obtenirTotalsNumPreu() {
    let numero = 0;
    let importTotal = 0;
    for (let articleSofa of this.cistell) {
      numero += articleSofa.quantitat;
      importTotal += articleSofa.quantitat * articleSofa.preu;
    }
    return { numero, importTotal };
  }

  // Funció per calcular el preu total de la Cistella. Ha estat inclosa amb la funció obtenirNumeroDeSofas
  // obtenirPreuTotal() {
  //   let importTotal = 0;
  //   for (let articleSofa of this.cistell) {
  //     importTotal += articleSofa.quantitat * articleSofa.preu;
  //   }
  //   return importTotal;
  // }
}