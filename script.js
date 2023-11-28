let tilapias = 0;

let tilapiasporsec = 0;

let tilapiasporclick = 1;

//custo das ferramentas
let custobambu = 10;

let custoanzolex = 10;

let custofibra = 100;

let custoanzolgr = 1000;

let custoiscapq = 5000;

let custovaraaco = 10000;

let custoanzoldourado = 50000;

let custoiscagr = 100000;

let custovaraprofissional = 150000;

let custoanzoltubarao = 300000;

let custotilapio = 500000;

//quantas ferramentas vc tem
let varabambu = 0;

let anzolextra = 0;

let varafibra = 0;

let anzolgrande = 0;

let iscapequena = 0;

let varaaco = 0;

let anzoldourado = 0;

let iscagrande = 0;

let varaprofissional = 0

let anzoltubarao = 0

let tilapio = 0

//funcao para clickar nas tilapias
function increment() {
    tilapias += tilapiasporclick;
    document.getElementById("MostrarTilapias").innerText = tilapias;

    if(tilapias>=50000000){
        document.getElementById("gameOver").innerText = "Você ganhou o jogo! As tilapias dominaram o mundo!"
    }
}

setInterval(function (){
    tilapias += tilapiasporsec;

    document.getElementById("MostrarTilapias").innerText = tilapias;
}, 1000)

//comprar as ferramentas
function buyvarabambu(){
    console.log("kek")
    if (tilapias >= custobambu){
        tilapias -= custobambu;
        document.getElementById("MostrarTilapias").innerText = tilapias;

        varabambu++;
        document.getElementById("BambuQuant").innerText = varabambu;

        custobambu *=2;
        document.getElementById("BambuCusto").innerText = custobambu;

        tilapiasporsec += 1;
        document.getElementById("MostrarTilapiasPorSec").innerText = tilapiasporsec;


    } else {
        alert("Você nao tem tilapias o bastante!")
    }
}
function buyanzolextra(){
    if (tilapias >= custoanzolex){
        tilapias -= custoanzolex;
        document.getElementById("MostrarTilapias").innerText = tilapias;

        anzolextra++;
        document.getElementById("anzolextraQuant").innerText = anzolextra;

        custoanzolex *=2;
        document.getElementById("anzolextraCusto").innerText = custoanzolex;

        tilapiasporclick += 1;
        document.getElementById("MostarTilapiasPorClique").innerText = tilapiasporclick;

    } else {
        alert("Você nao tem tilapias o bastante!")
    }
}
function buyvarafibra(){
    if (tilapias >= custofibra){
        tilapias -= custofibra;
        document.getElementById("MostrarTilapias").innerText = tilapias;

        varafibra++;
        document.getElementById("FibraQuant").innerText = varafibra;

        custofibra *=2;
        document.getElementById("FibraCusto").innerText = custofibra;

        tilapiasporsec += 100;
        document.getElementById("MostrarTilapiasPorSec").innerText = tilapiasporsec;


    } else {
        alert("Você nao tem tilapias o bastante!")
    }
}
function buyanzolgrande(){
    if (tilapias >= custoanzolgr){
        tilapias -= custoanzolgr;
        document.getElementById("MostrarTilapias").innerText = tilapias;

        anzolgrande++;
        document.getElementById("AnzolGrandeQuant").innerText = anzolgrande;

        custoanzolgr *=2;
        document.getElementById("AnzolGrandeCusto").innerText = custoanzolgr;

        tilapiasporclick += 100;
        document.getElementById("MostarTilapiasPorClique").innerText = tilapiasporclick;

    } else {
        alert("Você nao tem tilapias o bastante!")
    }
}
function buyiscapequena(){
    if (tilapias >= custoiscapq){
        tilapias -= custoiscapq;
        document.getElementById("MostrarTilapias").innerText = tilapias;

        iscapequena++;
        document.getElementById("IscaPequenaQuant").innerText = iscapequena;

        custoiscapq *=2;
        document.getElementById("IscaPequenaCusto").innerText = custoiscapq;
        
        tilapiasporsec *=1.05;
        tilapiasporsec = Math.floor(tilapiasporsec);
        document.getElementById("MostrarTilapiasPorSec").innerText = tilapiasporsec;
    }else {
        alert("Você nao tem tilapias o bastante!")
    }
}
function buyvaraaco(){
    if (tilapias >= custovaraaco){
        tilapias -= custovaraaco;
        document.getElementById("MostrarTilapias").innerText = tilapias;

        varaaco++;
        document.getElementById("VaraAcoQuant").innerText = varaaco;

        custovaraaco *=2;
        document.getElementById("VaraAcoCusto").innerText = custovaraaco;

        tilapiasporsec += 1000;
        document.getElementById("MostrarTilapiasPorSec").innerText = tilapiasporsec;


    } else {
        alert("Você nao tem tilapias o bastante!")
    }
}
function buyanzoldourado(){
    if (tilapias >= custoanzoldourado){
        tilapias -= custoanzoldourado;
        document.getElementById("MostrarTilapias").innerText = tilapias;

        anzoldourado++;
        document.getElementById("AnzolDouradoQuant").innerText = anzoldourado;

        custoanzoldourado *=2;
        document.getElementById("AnzolDouradoCusto").innerText = custoanzoldourado;

        tilapiasporclick += 1000;
        document.getElementById("MostarTilapiasPorClique").innerText = tilapiasporclick;

    } else {
        alert("Você nao tem tilapias o bastante!")
    }
}
function buyiscagrande(){
    if (tilapias >= custoiscagr){
        tilapias -= custoiscagr;
        document.getElementById("MostrarTilapias").innerText = tilapias;

        iscagrande++;
        document.getElementById("IscaGrandeQuant").innerText = iscagrande;

        custoiscagr *=2;
        document.getElementById("IscaGrandeCusto").innerText = custoiscagr;
        
        tilapiasporsec *=1.20;
        tilapiasporsec = Math.floor(tilapiasporsec);
        document.getElementById("MostrarTilapiasPorSec").innerText = tilapiasporsec;
    }else {
        alert("Você nao tem tilapias o bastante!")
    }
}
function buyvaraprofissional(){
    if (tilapias >= custovaraprofissional){
        tilapias -= custovaraprofissional;
        document.getElementById("MostrarTilapias").innerText = tilapias;

        varaprofissional++;
        document.getElementById("VaraProfisssionalQuant").innerText = varaprofissional;

        custovaraprofissional *=2;
        document.getElementById("VaraProfissionalCusto").innerText = custovaraprofissional;

        tilapiasporsec += 50000;
        document.getElementById("MostrarTilapiasPorSec").innerText = tilapiasporsec;


    } else {
        alert("Você nao tem tilapias o bastante!")
    }
}
function buyanzoltubarao(){
    if (tilapias >= custoanzoltubarao){
        tilapias -= custoanzoltubarao;
        document.getElementById("MostrarTilapias").innerText = tilapias;

        anzoltubarao++;
        document.getElementById("AnzolTubaraoQuant").innerText = anzoltubarao;

        custoanzoltubarao *=2;
        document.getElementById("AnzolTubaraoCusto").innerText = custoanzoltubarao;

        tilapiasporclick +=100000 ;
        document.getElementById("MostarTilapiasPorClique").innerText = tilapiasporclick;

    } else {
        alert("Você nao tem tilapias o bastante!")
    }
}
function buytilapio(){
    if (tilapias >= custotilapio){
        tilapias -= custotilapio;
        document.getElementById("MostrarTilapias").innerText = tilapias;

        tilapio++;
        document.getElementById("TilapioQuant").innerText = tilapio;

        custotilapio *=3;
        document.getElementById("TilapioCusto").innerText = custotilapio;

        tilapiasporclick +=300000 ;
        document.getElementById("MostarTilapiasPorClique").innerText = tilapiasporclick;

        tilapiasporsec += 200000;
        document.getElementById("MostrarTilapiasPorSec").innerText = tilapiasporsec;

        tilapiasporsec *=1.50;
        tilapiasporsec = Math.floor(tilapiasporsec);
        document.getElementById("MostrarTilapiasPorSec").innerText = tilapiasporsec;

    } else {
        alert("Você nao tem tilapias o bastante!")
    }
}





