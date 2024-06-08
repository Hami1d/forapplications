const units = {
  mm: { factor: 1, element: document.getElementById("mm") },
  cm: { factor: 10, element: document.getElementById("cm") },
  m: { factor: 1000, element: document.getElementById("m") },
  dm: { factor: 100, element: document.getElementById("dm") },
  km: { factor: 1e6, element: document.getElementById("km") },
  z: { factor: 25.4, element: document.getElementById("z") },
  fuß: { factor: 304.8, element: document.getElementById("fuß") },
  y: { factor: 914.4, element: document.getElementById("y") },
  mile: { factor: 1.609e6, element: document.getElementById("mile") },
};

function convertAndUpdate(baseUnit, baseValue) {
  for (let unit in units) {
    if (unit !== baseUnit) {
      units[unit].element.value =
        (baseValue * units[baseUnit].factor) / units[unit].factor;
    }
  }
}

for (let unit in units) {
  units[unit].element.addEventListener("input", function () {
    convertAndUpdate(unit, parseFloat(this.value) || 0);
  });
}
