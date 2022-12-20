// ID's
// GWP% GWPW PWP% PWGW P%GW P%PW
// Grundwert
const GWPs = document.getElementById('GWP%');
const GWPW = document.getElementById('GWPW');
// Prozentwert
const PWPs = document.getElementById('PWP%');
const PWGW = document.getElementById('PWGW');
// Prozentsatz
const PsGW = document.getElementById('P%GW');
const PsPW = document.getElementById('P%PW');
// Buttons
const GWbtn = document.getElementById('GWbtn');
const PWbtn = document.getElementById('PWbtn');
const Psbtn = document.getElementById('P%btn');
// Grundwert berechnung
GWbtn.addEventListener('click', function(){
    let a = (GWPW.value*100)/GWPs.value
    const GWlsg = document.createElement('p');
    GWlsg.innerText = 'Ihr Ergebnis lautet ' + a;
    Grundwertf.appendChild(GWlsg);

    GWbtn.addEventListener('click', function(){
        Grundwertf.removeChild(GWlsg);});

});
// Prozentwert berechnung
PWbtn.addEventListener('click', function(){
    let a = (PWPs.value*PWGW.value)/100
    const PWlsg = document.createElement('p');
    PWlsg.innerText = 'Ihr Ergebnis lautet ' + a;
    prozentwertf.appendChild(PWlsg);
    
    PWbtn.addEventListener('click', function(){
        prozentwertf.removeChild(PWlsg);});
});
// Prozentsatz berechnung
Psbtn.addEventListener('click', function(){
    let a = (PsPW.value/PsGW.value)*100
    const Pslsg = document.createElement('p');
    Pslsg.innerText = 'Ihr Ergebnis lautet ' + a + '%.';
    prozentsatzf.appendChild(Pslsg);
    
    Psbtn.addEventListener('click', function(){
        prozentsatzf.removeChild(Pslsg);});
});
