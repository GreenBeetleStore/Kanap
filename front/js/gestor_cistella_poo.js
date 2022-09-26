// Programació Orientada a Objectes (POO) Gestor de la Cistella.

// Declarar la class Cistell i crear un constructor.
export class Cistell {
  panera = [];
  constructor() {
    let cistell = localStorage.getItem("Cistella");
    if (cistell != null) {
      this.panera = JSON.parse(cistell);
    }
  }

  // Funció per guardar la CLAU(Cistella) i els VALORS(variable: Cistell) de Local Storage.
  guardar() {
    localStorage.setItem("Cistella", JSON.stringify(this.panera));
  }

  // Funció per afegir articles a la Cistella.
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
    this.ordenar(articleSofa);
    this.guardar();
  }

  // Funció per eliminar articles de la Cistella.
  eliminar(articleSofa) {
    this.panera = this.panera.filter(
      (pr) =>
        pr.id !== articleSofa.id ||
        pr.colorSeleccionat !== articleSofa.colorSeleccionat
    );
    this.guardar();
  }

  // Funció per canviar la quantitat d'articles de la Cistella.
  canviarQuantitat(articleSofa, quantitat) {
    console.log(articleSofa);
    let trovarProducte = this.panera.find(
      (pr) =>
        pr.id == articleSofa.id &&
        pr.colorSeleccionat == articleSofa.colorSeleccionat
    );
    console.log(trovarProducte);
    if (trovarProducte != undefined) {
      trovarProducte.quantitat += quantitat;
      if (trovarProducte.quantitat <= 0) {
        this.eliminar(trovarProducte);
      } else {
        this.guardar();
      }
    }
  }

  // Funció per calcular la quantitat TOTAL d'articles de la Cistella i Preu TOTAL.
  obtenirTotals() {
    let quantitatTotal = 0;
    let importTotal = 0;
    for (let articleSofa of this.panera) {
      quantitatTotal += articleSofa.quantitat;
      importTotal += articleSofa.quantitat * articleSofa.preuProducte;
    }
    this.guardar();
    return { quantitatTotal, importTotal };
  }

  // Funció per ordenar els articles segons l'ID.
  ordenar() {
    this.panera.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id == b.id) {
        return 0;
      }
      if (a.id > b.id) {
        return 1;
      }
    });
    // this.panera.sort((a, b) => {
    //   return a.id-b.id;
    // });
  }
}
