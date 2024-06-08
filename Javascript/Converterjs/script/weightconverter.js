const mikrogramm = document.getElementById("mikrog");
const milligramm = document.getElementById("mg");
const gramm = document.getElementById("g");
const kilogramm = document.getElementById("kg");
const tonne = document.getElementById("t");

const unitFactors = {
  mikrog: 1, // 1 Mikrogramm = 1 Mikrogramm
  mg: 1000, // 1 Milligramm = 1000 Mikrogramm
  g: 1000000, // 1 Gramm = 1.000.000 Mikrogramm
  kg: 1000000000, // 1 Kilogramm = 1.000.000.000 Mikrogramm
  t: 1000000000000, // 1 Tonne = 1.000.000.000.000 Mikrogramm
};

function convertWeight(baseUnit, baseValue) {
  for (let unit in unitFactors) {
    if (unit !== baseUnit) {
      document.getElementById(unit).value =
        (baseValue * unitFactors[baseUnit]) / unitFactors[unit];
    }
  }
}

mikrogramm.addEventListener("input", function () {
  convertWeight("mikrog", parseFloat(this.value) || 0);
});

milligramm.addEventListener("input", function () {
  convertWeight("mg", parseFloat(this.value) || 0);
});

gramm.addEventListener("input", function () {
  convertWeight("g", parseFloat(this.value) || 0);
});

kilogramm.addEventListener("input", function () {
  convertWeight("kg", parseFloat(this.value) || 0);
});

tonne.addEventListener("input", function () {
  convertWeight("t", parseFloat(this.value) || 0);
});
