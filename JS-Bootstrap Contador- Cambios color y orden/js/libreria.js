window.onload = function() {
    // Asociacion de eventos
    // No. de parrafos boton CONTAR
    var botoncontar = document.getElementById("boton_contar");
    botoncontar.addEventListener("click",contarParrafos);
    // Boton selector de COLOR
    var selectorcolor = document.getElementById("selectorcolor");
    selectorcolor.addEventListener("change",cambiarColor);
    // Boton reordenar
    var reordenar = document.getElementById("reordenar");
    reordenar.addEventListener("click",reordenarColumnas);
    // Boton cambiar COLOR
    var cambiacolor = document.getElementById("botoncambiacolor");
    cambiacolor.addEventListener("click",cambiaColorParrafos);

    var botoncontar = document.getElementById("boton_contar");
    botoncontar.addEventListener("click",contarParrafos);

    var selector = document.getElementById("selectorcolor");
    selectorcolor.addEventListener("change",cambiarcolor);
}

// Funcion contar parrafos
function contarParrafos(e) {
    e.preventDefault();
    let parrafos = document.getElementsByTagName("p");
    document.getElementById("numeroparrafos").innerHTML = parrafos.length-1;
}

// Funcion cambiar color selector
function cambiarColor(e) {
    e.preventDefault();
    let texto = document.getElementById("textocolor");
    texto.innerHTML = this.value;
    texto.style.backgroundColor = this.value;
}

// Funcion reordenar parrafos
function reordenarColumnas(e) {
    e.preventDefault();
    let columnas = document.querySelectorAll("#columnastexto article");
    /* for (let x = 0; x < columnas.length; x++ ) {
        let clases = columnas[x].classList;
        for (let y = 0; y <clases.length; y++ ) {
            if(clases[y].indexOf("order-")!=-1) {
                columnas[x].classList.remove(clases[y]);
            }
        } */

    /* columnas[x].classList.remove("order-"+(x+1));
       columnas[x].classList.add("order-"+(columnas.length-(x))); 
    } */
    for(let x = 0; x < columnas.length; x++) {
        columnas[x].classList.remove("order-"+(x+1));
        columnas[x].classList.add("order-"+(columnas.length-(x)));
    }
}

function cambiaColorParrafos(e) {
    e.preventDefault();
    let parrafos = document.getElementsByTagName("p");
    var selectorcolor = document.getElementById("selectorcolor");
    for(let cuantos=0; cuantos<parrafos.length-1; cuantos++) {
        parrafos[cuantos].style.color = selectorcolor.value;
    }
}

function cambiarcolor() {
    let textocol = document.getElementById("textocolor");
    textocol.innerHTML = this.value;
    textocol.style.backgroundColor = this.value;
}

function contarParrafos() {
    let textoparrafos = document.getElementById("numeroparrafos");
    let parrafos = document.getElementsByTagName("p");
    textoparrafos.innerHTML = parrafos.length;
    textoparrafos.classList.remove("order-1");
    textoparrafos.classList.add("order-2");
}