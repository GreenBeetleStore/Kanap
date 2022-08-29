// Programació Orientada a Objectes (POO) Gestor de la Cistella

// Declarar la class Cistell i crear un constructor
export class Cistell {
  panera = [];
  constructor() {
    let cistell = localStorage.getItem("Cistella");
    if (cistell != null) {
      this.panera = JSON.parse(cistell);
    }
  }
  // Funció per guardar la CLAU(Cistella) i els VALORS(variable: Cistell) de Local Storage
  guardar() {
    localStorage.setItem("Cistella", JSON.stringify(this.panera));
  }
  // Funció per afegir articles a la Cistella
  afegir(articleSofa) {
    let trovarProducte = this.panera.find(
      (pr) =>
        pr.id == articleSofa.id &&
        pr.colorSeleccionat == articleSofa.colorSeleccionat
    );
    if (trovarProducte != undefined) {
      trovarProducte.quantitat += articleSofa.quantitat;
    } else {
      this.panera.push(articleSofa);
    }
    this.guardar();
  }
  // Funció per eliminar articles de la Cistella
  eliminar(articleSofa) {
    this.panera = this.panera.filter((pr) => pr.id != articleSofa.id);
    this.guardar();
  }
  // Funció per canviar la quantitat d'articles de la Cistella
  canviarQuantitat(articleSofa, quantitat) {
    let trovarProducte = this.panera.find((pr) => pr.id == articleSofa.id);
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
    let quantitatTotal = 0;
    let importTotal = 0;
    for (let articleSofa of this.panera) {
      quantitatTotal += articleSofa.quantitat;
      importTotal += articleSofa.quantitat * articleSofa.preu;
    }
    return { quantitatTotal, importTotal };
  }

  // Funció per calcular el preu total de la Cistella. Ha estat inclosa amb la funció obtenirNumeroDeSofas: línies 51, 54 i 56
  // obtenirPreuTotal() {
  //   let importTotal = 0;
  //   for (let articleSofa of this.panera) {
  //     importTotal += articleSofa.quantitat * articleSofa.preu;
  //   }
  //   return importTotal;
  // }
}
