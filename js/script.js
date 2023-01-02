// Változók
var val = 0;
var arfolyam = 0;
var date = new Date().toLocaleDateString("hu-HU");
var apro_KiBe = false;
var papir_ossz;
var apro_ossz;
var osszesen;
var papir_db = [];
var papir_ertek = [];
var apro_db = [];
var apro_ertek = [];
var index;
var text;
var teszt;

// Tömbök
var valutak;

// Valuta adatok
valutak = 
    [{  nev: "HUF", nyelv: "hu-HU", jel: " Ft",
        papir_e: [500, 1000, 2000, 5000, 10000, 20000],
        apro_e: [5, 10, 20, 50, 100, 200],
        arfoly: 'none',
    },
    {   nev: "EUR", nyelv: "de-DE", jel: " €",
        papir_e: [5, 10, 20, 50, 100, 200, 500],
        apro_e: [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2],
        arfoly: 'inline-block',
    },
    {   nev: "USD", nyelv: "en-US", jel: " $",
        papir_e: [1, 2, 5, 10, 20, 50, 100],
        apro_e: [0.01, 0.05, 0.1, 0.25, 0.5, 1],
        arfoly: 'inline-block',
    }]


// Valuta váltó ///////////////////////////////////
function ValValt () {
    val = Number(document.getElementById("valuta_lista").value);
    // USD
    if (val === 2) {
        Valuta();
    // EUR
    } else if (val === 1) {
        Valuta();
    // HUF
    } else {
        Valuta();
    }
}

// Valuta váltási események
function Valuta () {
    document.getElementById("penzkep").style.backgroundImage = `linear-gradient(rgba(15, 15, 15, 0.6), rgba(24, 24, 24, 0.9)), url(./img/${valutak[val].nev}.webp)`;
    document.getElementById("arfolyam_egesz").style.display = valutak[val].arfoly;

    if (valutak[val].papir_e.length > 6) {
        document.getElementById("kp-extra").style.display = "block";
    } else {
        document.getElementById("kp-extra").style.display = "none";
    }

    if (valutak[val].apro_e.length > 6) {
        document.getElementById("apro-extra1").style.display = "block";
        document.getElementById("apro-extra2").style.display = "block";
    } else {
        document.getElementById("apro-extra1").style.display = "none";
        document.getElementById("apro-extra2").style.display = "none";
    }

    index = 0;
    while (index < valutak[val].papir_e.length) {
        document.getElementById(`pp${index}`).innerHTML = new Intl.NumberFormat(valutak[val].nyelv, {style: 'currency', currency: valutak[val].nev, minimumFractionDigits: 0}).format(valutak[val].papir_e[index]);
        index++;
    }
    index = 0;
    while (index < valutak[val].apro_e.length) {
        document.getElementById(`aa${index}`).innerHTML = new Intl.NumberFormat(valutak[val].nyelv, {style: 'currency', currency: valutak[val].nev, minimumFractionDigits: 0}).format(valutak[val].apro_e[index]);
        index++;
    }

    

    // new Intl.NumberFormat(valutak[val].nyelv, {style: 'currency', currency: valutak[val].nev, minimumFractionDigits: 0}).format(valutak[val].papir_e[i])

}
/*
// Apró Kapcsoló
document.getElementById('apro').onclick = function () {
    apro_KiBe = !apro_KiBe
    if(apro_KiBe) {
        document.getElementById("apro-box").style.display = "flex";
    } else {
        document.getElementById("apro-box").style.display = "none";
    }
    console.log(apro_KiBe)
}
*/

// OSSZEGZES
function Szamolj() {
    arfolyam = Number(document.getElementById("arfolyam").value);

    if (valutak[val].arfoly === "inline-block" && arfolyam < 1) {
        arfolyam = alert(`Add meg azt az ${valutak[val].nev} árfolyamot, amivel számolni szeretnél`);
    } else {
    }

    //Papír
    index = 0;
    papir_ossz = 0;
    papir_db = [];
    papir_ertek = [];
    while (index < valutak[val].papir_e.length) {
        papir_db[index] = Number(document.getElementById(`p${index}`).value);
        papir_ertek[index] = papir_db[index] * valutak[val].papir_e[index];
        papir_ossz += papir_ertek[index];
        index++;
    }
    document.getElementById("papir_ossz").innerHTML = new Intl.NumberFormat(valutak[val].nyelv, {style: 'currency', currency: valutak[val].nev, minimumFractionDigits: 0}).format(papir_ossz);
    document.getElementById("js_papir_ossz").innerHTML = new Intl.NumberFormat(valutak[val].nyelv, {style: 'currency', currency: valutak[val].nev, minimumFractionDigits: 0}).format(papir_ossz);

    //Apró
    index = 0;
    apro_ossz = 0;
    apro_db = [];
    apro_ertek = [];
    while (index < valutak[val].apro_e.length) {
        apro_db[index] = Number(document.getElementById(`a${index}`).value);
        apro_ertek[index] = apro_db[index] * valutak[val].apro_e[index];
        apro_ossz += apro_ertek[index];
        index++;
    }
    document.getElementById("apro_ossz").innerHTML = new Intl.NumberFormat(valutak[val].nyelv, {style: 'currency', currency: valutak[val].nev, minimumFractionDigits: 0}).format(apro_ossz);
    document.getElementById("js_apro_ossz").innerHTML = new Intl.NumberFormat(valutak[val].nyelv, {style: 'currency', currency: valutak[val].nev, minimumFractionDigits: 0}).format(apro_ossz);


    osszesen = apro_ossz + papir_ossz;
    document.getElementById("osszegzo").innerHTML = new Intl.NumberFormat(valutak[val].nyelv, {style: 'currency', currency: valutak[val].nev, minimumFractionDigits: 0}).format(osszesen);
    document.getElementById("osszegzo2").innerHTML = new Intl.NumberFormat(valutak[val].nyelv, {style: 'currency', currency: valutak[val].nev, minimumFractionDigits: 0}).format(osszesen);

    NyomTataS();
}

// NYOMTATÁS (Gomb)
function Nyomtass() {
    window.print();
}

// NYOMTATÁS RENDER
function NyomTataS() {
    document.getElementById("js_datum").innerHTML = "<br>" + date;
    document.getElementById("js_valuta").innerHTML = "<br>" + valutak[val].nev;
    document.getElementById("js_arfolyam").innerHTML = "<br>" + arfolyam + " Ft";
    if (valutak[val].nev != "HUF") {
        document.getElementById("js_forintban").innerHTML = new Intl.NumberFormat('hu-HU', {style: 'currency', currency: 'HUF', minimumFractionDigits: 0}).format(osszesen*arfolyam);
    } else {
        document.getElementById("js_forintban").innerHTML = ""
    }

index = 0;
text = "";
while (index < valutak[val].papir_e.length) {
    text += new Intl.NumberFormat(valutak[val].nyelv, {style: 'currency', currency: valutak[val].nev, minimumFractionDigits: 0}).format(valutak[val].papir_e[index]) + " x <b>" + papir_db[index]+ "</b> = " + new Intl.NumberFormat(valutak[val].nyelv, {style: 'currency', currency: valutak[val].nev, minimumFractionDigits: 0}).format(papir_ertek[index]) + "<br>";
    index++;
}
document.getElementById("js_papir").innerHTML = text;

index = 0;
text = "";
while (index < valutak[val].apro_e.length) {
    text += new Intl.NumberFormat(valutak[val].nyelv, {style: 'currency', currency: valutak[val].nev, minimumFractionDigits: 0}).format(valutak[val].apro_e[index]) + " x <b>" + apro_db[index]+ "</b> = " + new Intl.NumberFormat(valutak[val].nyelv, {style: 'currency', currency: valutak[val].nev, minimumFractionDigits: 0}).format(apro_ertek[index]) + "<br>";
    index++;
}
document.getElementById("js_apro").innerHTML = text;
}

//Funkciók ///////////////////////////////////
Valuta();