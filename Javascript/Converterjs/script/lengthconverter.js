const Millimeter = document.getElementById("mm");
const Zentimeter = document.getElementById("cm");
const Meter = document.getElementById("m");
const Dezimeter = document.getElementById("dm");
const Kilometer = document.getElementById("km");
const Zoll = document.getElementById("z");
const Fuß = document.getElementById("fuß");
const Yards = document.getElementById("y");
const Meilen = document.getElementById("mile");


Millimeter.addEventListener("input",function() {
    let a = this.value; // mm
    let c = a / 10; // cm
    let d = a / 1000; // m
    let e = a / 100; // dm
    let f = a / 1e+6; // km
    let g = a / 25.4; // z
    let h = a / 304.8; // fuß
    let i = a / 914.4; // y
    let j = a / 1.609e+6; // mile
    Zentimeter.value=c;
    Meter.value=d;
    Dezimeter.value=e;
    Kilometer.value=f;
    Zoll.value=g;
    Fuß.value=h;
    Yards.value=i;
    Meilen.value=j;
});

Zentimeter.addEventListener("input",function() {
    let a = this.value; // cm
    let c = a * 10; // mm
    let d = a / 100; // m
    let e = a / 10; // dm
    let f = a / 100000; // km
    let g = a / 2.54; // z
    let h = a / 30.48; // fuß
    let i = a / 91.44; // y
    let j = a / 160900; // mile
    Millimeter.value=c;
    Meter.value=d;
    Dezimeter.value=e;
    Kilometer.value=f;
    Zoll.value=g;
    Fuß.value=h;
    Yards.value=i;
    Meilen.value=j;
});

Meter.addEventListener("input",function() {
    let a = this.value; // m
    let c = a * 100; // cm
    let d = a * 1000; // mm
    let e = a * 10; // dm
    let f = a / 1000; // km
    let g = a * 39.37 ; // z
    let h = a * 3.281; // fuß
    let i = a * 1.094; // y
    let j = a / 1609 ; // mile
    Zentimeter.value=c;
    Millimeter.value=d;
    Dezimeter.value=e;
    Kilometer.value=f;
    Zoll.value=g;
    Fuß.value=h;
    Yards.value=i;
    Meilen.value=j;
});

Dezimeter.addEventListener("input",function() {
    let a = this.value; // dm
    let c = a * 10; // cm
    let d = a / 10; // m
    let e = a * 100; // mm
    let f = a / 10000; // km
    let g = a * 3.937; // z
    let h = a / 3.048; // fuß
    let i = a / 9.144; // y
    let j = a / 16090; // mile
    Zentimeter.value=c;
    Meter.value=d;
    Millimeter.value=e;
    Kilometer.value=f;
    Zoll.value=g;
    Fuß.value=h;
    Yards.value=i;
    Meilen.value=j;
});

Kilometer.addEventListener("input",function() {
    let a = this.value; // km
    let c = a * 100000; // cm
    let d = a * 1000; // m
    let e = a * 10000; // dm
    let f = a * 1e+6; // mm
    let g = a * 39370; // z
    let h = a * 3281; // fuß
    let i = a * 1094; // y
    let j = a / 1.609; // mile
    Millimeter.value=b;
    Meter.value=d;
    Dezimeter.value=e;
    Millimeter.value=f;
    Zoll.value=g;
    Fuß.value=h;
    Yards.value=i;
    Meilen.value=j;
});

Zoll.addEventListener("input",function() {
    let a = this.value; // z
    let c = a * 2.54; // cm
    let d = a / 39.37; // m
    let e = a / 3.937; // dm
    let f = a / 39370; // km
    let g = a * 25.4; // mm
    let h = a / 12; // fuß
    let i = a / 36; // y
    let j = a / 63360; // mile
    Zentimeter.value=c;
    Meter.value=d;
    Dezimeter.value=e;
    Kilometer.value=f;
    Millimeter.value=g;
    Fuß.value=h;
    Yards.value=i;
    Meilen.value=j;
});

Fuß.addEventListener("input",function() {
    let a = this.value; // fuß
    let c = a * 30.48; // cm
    let d = a / 3.281; // m
    let e = a * 3.048; // dm
    let f = a / 3281; // km
    let g = a * 12; // z
    let h = a * 304.8; // mm
    let i = a / 3; // y
    let j = a / 5280; // mile
    Zentimeter.value=c;
    Meter.value=d;
    Dezimeter.value=e;
    Kilometer.value=f;
    Zoll.value=g;
    Millimeter.value=h;
    Yards.value=i;
    Meilen.value=j;
});

Yards.addEventListener("input",function() {
    let a = this.value; // y
    let c = a * 91.44; // cm
    let d = a / 1.094; // m
    let e = a / 9.144; // dm
    let f = a / 1094; // km
    let g = a * 36; // z
    let h = a * 3; // fuß
    let i = a * 914.4; // mm
    let j = a / 1760; // mile
    Zentimeter.value=c;
    Meter.value=d;
    Dezimeter.value=e;
    Kilometer.value=f;
    Zoll.value=g;
    Fuß.value=h;
    Millimeter.value=i;
    Meilen.value=j;
});

Meilen.addEventListener("input",function() {
    let a = this.value; // mile
    let c = a * 160900; // cm
    let d = a * 1609; // m
    let e = a * 16090; // dm
    let f = a * 1.609; // km
    let g = a * 63360; // z
    let h = a * 5280; // fuß
    let i = a * 1760; // y
    let j = a * 1.609e+6; // mm
    Zentimeter.value=c;
    Meter.value=d;
    Dezimeter.value=e;
    Kilometer.value=f;
    Zoll.value=g;
    Fuß.value=h;
    Yards.value=i;
    Millimeter.value=j;
});