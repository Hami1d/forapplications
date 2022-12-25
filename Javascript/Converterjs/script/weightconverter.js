// ng mg g kg t

const mikrogramm = document.getElementById("mikrog");
const milligramm = document.getElementById("mg");
const gramm = document.getElementById("g");
const kilogramm = document.getElementById("kg");
const tonne = document.getElementById("t");

mikrogramm.addEventListener("input",function() {
    let a = this.value;
    let b = a / 1000; // mg
    let c = a / 1e+6; // g
    let d = a / 1e+9; // kg
    let e = a / 1e+12; // t
    milligramm.value=b;
    gramm.value=c;
    kilogramm.value=d;
    tonne.value=e;
});


milligramm.addEventListener("input",function() {
    let a = this.value;
    let b = a * 1000; // mikrog
    let c = a / 1000; // g
    let d = a / 1e+6; // kg
    let e = a / 1000000000; // t
    mikrogramm.value=b;
    gramm.value=c;
    kilogramm.value=d;
    tonne.value=e;
});


gramm.addEventListener("input",function() {
    let a = this.value;
    let b = a / 1000; // kg
    let c = a / 1000000; // t
    let d = a * 1e+6; // mikrog
    let e = a * 1000; // mg
    kilogramm.value=b;
    tonne.value=c;
    mikrogramm.value=d;
    milligramm.value=e;
});


kilogramm.addEventListener("input",function() {
    let x = this.value; // Kilogramm
    let y = x * 1000; // Gramm
    let z = x / 1000; // Tonne
    let a = x * 1e+9; // mikrogramm
    let b = x * 1000000; // Milligramm
    gramm.value=y;
    tonne.value=z;
    mikrogramm.value=a;
    milligramm.value=b;
});


tonne.addEventListener("input",function() {
    let a = this.value;
    let b = a * 1000000000000; // mikrog
    let c = a * 1000000000; // mg
    let d = a * 1000000 ; // g
    let e = a * 1000; // kg
    mikrogramm.value=b;
    milligramm.value=c;
    gramm.value=d;
    kilogramm.value=e;
});