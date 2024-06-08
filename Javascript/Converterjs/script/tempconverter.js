// Formel C => F (temp * 9/5) + 32
// Formel C => K temp + 273.15
// Formel F => C (temp - 32) * 5/9
// Formel F => K (temp - 32) * 5/9 + 273.15
// Formel K => C temp - 273.15
// Formel K => F (temp - 273.15) * 9/5 + 32

// ids: C F K

const Celsius = document.getElementById("C");
const Fahrenheit = document.getElementById("F");
const Kelvin = document.getElementById("K");

// Funktion zur Umrechnung und Aktualisierung der Temperaturwerte
function convertTemperature(unit, value) {
  let c, f, k; // Variablen für die drei Temperatureinheiten

  if (unit === "C") {
    c = parseFloat(value) || 0;
    f = (c * 9) / 5 + 32;
    k = c + 273.15;
  } else if (unit === "F") {
    f = parseFloat(value) || 0;
    c = ((f - 32) * 5) / 9;
    k = c + 273.15;
  } else if (unit === "K") {
    k = parseFloat(value) || 0;
    c = k - 273.15;
    f = (c * 9) / 5 + 32;
  }

  if (unit !== "C") Celsius.value = c;
  if (unit !== "F") Fahrenheit.value = f;
  if (unit !== "K") Kelvin.value = k;
}

Celsius.addEventListener("input", function () {
  convertTemperature("C", this.value);
});

Fahrenheit.addEventListener("input", function () {
  convertTemperature("F", this.value);
});

Kelvin.addEventListener("input", function () {
  convertTemperature("K", this.value);
});
