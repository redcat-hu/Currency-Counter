// Alap
var papir_ossz = 0;
var apro_ossz = 0;
var teljes_ossz = 0;
var arfolyam;
var date = new Date().toLocaleDateString("hu-HU");

Forint();

// Valuta váltó ///////////////////////////////////
function ValutaValtas () {
    valuta = document.getElementById("list1").value;

    if (valuta == "usd") {
        Dollar();
    } else if (valuta == "eur") {
        Euro();
    } else {
        Forint ();
    }
}

// HUF / EUR / USD ////////////////////////////
function Forint() {
    valuta = "huf";
    valuta_jel = " Ft";
    papir_ertek = [500, 1000, 2000, 5000, 10000, 20000];
    papir_fajta = ["500 Ft", "1000 Ft", "2000 Ft", "5000 Ft", "10.000 Ft", "20.000 Ft"];
    apro_ertek = [5, 10, 20, 50, 100, 200];
    apro_fajta = ["5 Ft", "10 Ft", "20 Ft", "50 Ft", "100 Ft", "200 Ft"];

    ValCimValt();
    document.getElementById("arfolyam1").style.display = "none";
    document.getElementById("kp-extra").style.display = "none";
    document.getElementById("apro-extra1").style.display = "none";
    document.getElementById("apro-extra2").style.display = "none";

    document.getElementById("penzkep").style.background = "linear-gradient(rgba(15, 15, 15, 0.644), rgba(24, 24, 24, 0.911)), url(./img/huf.webp)";
    document.getElementById("penzkep").style.backgroundSize = "cover";

    console.log(valuta);
    console.log(papir_ertek);
}

function Euro() {
    valuta = "eur";
    valuta_jel = " €";
    papir_ertek = [5, 10, 20, 50, 100, 200, 500];
    papir_fajta = ["5 €", "10 €", "20 €", "50 €", "100 €", "200 €", "500 €"];
    apro_ertek = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2];
    apro_fajta = ["1 cent", "2 cent", "5 cent", "10 cent", "20 cent", "50 cent", "1 €", "2 €"];

    ValCimValt();
    document.getElementById("arfolyam1").style.display = "block";
    document.getElementById("kp-extra").style.display = "block";
    document.getElementById("apro-extra1").style.display = "block";
    document.getElementById("apro-extra2").style.display = "block";

    document.getElementById("penzkep").style.background = "linear-gradient(rgba(15, 15, 15, 0.644), rgba(24, 24, 24, 0.911)), url(./img/eur.webp)";
    document.getElementById("penzkep").style.backgroundSize = "cover";

    console.log(valuta);
    console.log(papir_ertek);
}

function Dollar() {
    valuta = "usd";
    valuta_jel = " $";
    papir_ertek = [1, 2, 5, 10, 20, 50, 100];
    papir_fajta = ["1 $", "2 $", "5 $", "10 $", "20 $", "50 $", "100 $"];
    apro_ertek = [0.01, 0.05, 0.1, 0.25, 0.5, 1];
    apro_fajta = ["1 cent", "5 cent", "10 cent", "25 cent", "50 cent", "1 $"];

    ValCimValt();
    document.getElementById("arfolyam1").style.display = "block";
    document.getElementById("kp-extra").style.display = "block";
    document.getElementById("apro-extra1").style.display = "none";
    document.getElementById("apro-extra2").style.display = "none";

    document.getElementById("penzkep").style.background = "linear-gradient(rgba(15, 15, 15, 0.644), rgba(24, 24, 24, 0.911)), url(./img/usd.webp)";
    document.getElementById("penzkep").style.backgroundSize = "cover";

    console.log(valuta);
    console.log(papir_ertek);
}

function ValCimValt () {
    document.getElementById("pp1").innerHTML = papir_fajta[0];
    document.getElementById("pp2").innerHTML = papir_fajta[1];
    document.getElementById("pp3").innerHTML = papir_fajta[2];
    document.getElementById("pp4").innerHTML = papir_fajta[3];
    document.getElementById("pp5").innerHTML = papir_fajta[4];
    document.getElementById("pp6").innerHTML = papir_fajta[5];
    document.getElementById("pp7").innerHTML = papir_fajta[6];

    document.getElementById("aa1").innerHTML = apro_fajta[0];
    document.getElementById("aa2").innerHTML = apro_fajta[1];
    document.getElementById("aa3").innerHTML = apro_fajta[2];
    document.getElementById("aa4").innerHTML = apro_fajta[3];
    document.getElementById("aa5").innerHTML = apro_fajta[4];
    document.getElementById("aa6").innerHTML = apro_fajta[5];
    document.getElementById("aa7").innerHTML = apro_fajta[6];
    document.getElementById("aa8").innerHTML = apro_fajta[7];
}


// APRÓ /////////////////////////////////
var aproKapcs = false;

document.getElementById('apro').onclick = function () {

    aproKapcs = !aproKapcs
    
    if(aproKapcs) {
        document.getElementById("apro-box").style.display = "flex";
    } else {
        document.getElementById("apro-box").style.display = "none";
    }
}


// NYOMTATÁS GOMB //////
function Nyomtass() {
    window.print();
}

// NYOMTATÁS RENDER
function NyomTataS() {
    document.querySelector(".js_datum").innerHTML = date;
    document.querySelector(".js_val").innerHTML = valuta.toUpperCase();

    document.getElementById("js_p1").innerHTML = papir_fajta[0] + " x " + Number(document.getElementById("p1").value) + " = " + p1 + valuta_jel;
    document.getElementById("js_p2").innerHTML = papir_fajta[1] + " x " + Number(document.getElementById("p2").value) + " = " + p2 + valuta_jel;
    document.getElementById("js_p3").innerHTML = papir_fajta[2] + " x " + Number(document.getElementById("p3").value) + " = " + p3 + valuta_jel;
    document.getElementById("js_p4").innerHTML = papir_fajta[3] + " x " + Number(document.getElementById("p4").value) + " = " + p4 + valuta_jel;
    document.getElementById("js_p5").innerHTML = papir_fajta[4] + " x " + Number(document.getElementById("p5").value) + " = " + p5 + valuta_jel;
    document.getElementById("js_p6").innerHTML = papir_fajta[5] + " x " + Number(document.getElementById("p6").value) + " = " + p6 + valuta_jel;

    document.getElementById("js_a1").innerHTML = apro_fajta[0] + " x " + Number(document.getElementById("a1").value) + " = " + a1 + valuta_jel;
    document.getElementById("js_a2").innerHTML = apro_fajta[1] + " x " + Number(document.getElementById("a2").value) + " = " + a2 + valuta_jel;
    document.getElementById("js_a3").innerHTML = apro_fajta[2] + " x " + Number(document.getElementById("a3").value) + " = " + a3 + valuta_jel;
    document.getElementById("js_a4").innerHTML = apro_fajta[3] + " x " + Number(document.getElementById("a4").value) + " = " + a4 + valuta_jel;
    document.getElementById("js_a5").innerHTML = apro_fajta[4] + " x " + Number(document.getElementById("a5").value) + " = " + a5 + valuta_jel;
    document.getElementById("js_a6").innerHTML = apro_fajta[5] + " x " + Number(document.getElementById("a6").value) + " = " + a6 + valuta_jel;
}


// OSSZEGZES
function Szamolj() {
    console.log(arfolyam);
}


function Osszegzes() {

    //Papír pénz
    p1 = Number(document.getElementById("p1").value) * papir_ertek[0];
    p2 = Number(document.getElementById("p2").value) * papir_ertek[1];
    p3 = Number(document.getElementById("p3").value) * papir_ertek[2];
    p4 = Number(document.getElementById("p4").value) * papir_ertek[3];
    p5 = Number(document.getElementById("p5").value) * papir_ertek[4];
    p6 = Number(document.getElementById("p6").value) * papir_ertek[5];
    
    papir_ossz = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("papir_ossz").innerHTML = papir_ossz + valuta_jel;

    //Apró (ha van)
    a1 = Number(document.getElementById("a1").value) * apro_ertek[0];
    a2 = Number(document.getElementById("a2").value) * apro_ertek[1];
    a3 = Number(document.getElementById("a3").value) * apro_ertek[2];
    a4 = Number(document.getElementById("a4").value) * apro_ertek[3];
    a5 = Number(document.getElementById("a5").value) * apro_ertek[4];
    a6 = Number(document.getElementById("a6").value) * apro_ertek[5];
    apro_ossz = a1 + a2 + a3 + a4 + a5 + a6;
    document.getElementById("apro_ossz").innerHTML = apro_ossz + valuta_jel;

    teljes_ossz = papir_ossz + apro_ossz;

    NyomTataS();

    if (valuta == "usd") {
        osszesen = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(teljes_ossz);

        document.getElementById("js_papir_ossz").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(papir_ossz);
        document.getElementById("js_apro_ossz").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(apro_ossz);

        arfolyam = Number(document.getElementById("arfolyam1b").value);
        document.getElementById("js_arfolyam").innerHTML =  arfolyam + " Ft";
        console.log(arfolyam);

    } else if (valuta == "eur") {
        osszesen = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(teljes_ossz);

        document.getElementById("js_papir_ossz").innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(papir_ossz);
        document.getElementById("js_apro_ossz").innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(apro_ossz);

        arfolyam = Number(document.getElementById("arfolyam1b").value);
        document.getElementById("js_arfolyam").innerHTML =  arfolyam + " Ft";
        document.getElementById("js_forintban").innerHTML = new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', minimumFractionDigits: 0}).format(teljes_ossz * arfolyam);
        console.log(arfolyam);

    } else if (valuta == "huf") {
        osszesen = new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', minimumFractionDigits: 0}).format(teljes_ossz);

        document.getElementById("js_papir_ossz").innerHTML = new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', minimumFractionDigits: 0}).format(papir_ossz);
        document.getElementById("js_apro_ossz").innerHTML = new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', minimumFractionDigits: 0}).format(apro_ossz);

        arfolyam = "-"
        document.getElementById("js_arfolyam").innerHTML =  arfolyam;
        console.log(arfolyam);

    } else {
        console.log('Hiba');
    }

    document.getElementById("osszegzo").innerHTML = osszesen;
    document.getElementById("osszegzo2").innerHTML = osszesen;

    console.log(osszesen);
}