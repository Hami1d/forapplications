// Formel C => F (temp * 9/5) + 32
// Formel C => K temp + 273.15
// Formel F => C (temp - 32) * 5/9
// Formel F => K (temp - 32) * 5/9 + 273.15
// Formel K => C temp - 273.15
// Formel K => F (temp - 273.15) * 9/5 + 32

// ids: C F K

let Celsius = document.getElementById("C");
let Fahrenheit = document.getElementById("F");
let Kelvin = document.getElementById("K");

Celsius.addEventListener("input",function() {
    let a = this.value;
    let b = (a * 9/5) + 32 ; // Fahrenheit
    let c = a * 1 + 273.15; // Kelvin 
    // let c = a + 273.15;

    Fahrenheit.value=b;
    Kelvin.value=c;
});


Fahrenheit.addEventListener("input",function() {
    let a = this.value;
    let b = (a - 32) * 5/9 ; // Celsius
    let c = (a - 32) * 5/9 + 273.15 ; // Kelvin
    Celsius.value=b;
    Kelvin.value=c;
});


Kelvin.addEventListener("input",function() {
    let a = this.value;
    let b = a - 273.15 ; // Celsius
    let c = (a - 273.15) * 9/5 + 32 ; // Fahrenheit
    Celsius.value=b;
    Fahrenheit.value=c;
});