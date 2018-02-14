// EJERCICIO 1

// Solicitar nombre
var nombre = prompt ("Nombre");
// Solicitar pais
var pais = prompt ("Pais");
// Solicitar edad
var edad = parseInt (prompt("Edad"));
// Chequear condición
if (edad <18) {
    console.log("Es mayor de edad");
}
// Comprobar nombre
if (nombre != "") {
    console.log("Hola "+nombre);
}

// ------------------------------

// EJERCICIO 2
var precioKM = 0.0;
var vehiculo = prompt("Vehiculo").toUpperCase();
var kms_recorridos = parseInt(prompt("Kms"));
var litros_consumidos = parseFloat(prompt("Litros"));

// CONVERTIR A MAYUSCULAS O MINUSCULAS
    // variabletexto.toUpperCase();
    // variabletexto.toLowerCase();
    // vehiculo.toUpperCase();
    // vehiculo = vehiculo.toLocaleUpperCase();
    
if (vehiculo.toUpperCase() == "COCHE") {
    precioKM = 0.10;
}
if (vehiculo.toUpperCase() == "MOTO") {
    precioKM = 0.20;
}
if (vehiculo.toUpperCase() == "AUTOBUS") {
    precioKM = 0.10;
}
var total = precioKM * kms_recorridos;
if (litros_consumidos > 100) {
    total = total + 2;
} else {
    total += 1;
}
console.log("Total :" +total);

// OPERADORES CONDICIONALES
    // (condicion) ?valorverdad : valorfalso
    // total = total + (litros_consumidos>100) ?2:1;

    /*  var a = 10;
        var b = 20;
        var c = 0;
        c = a++;
        c = ++a;

        + SUMA
        - RESTA
        / DIVISION
        * MULTIPLICACION
        = ASIGNACION
        += OPERADOR ADICION
        -= OPERADOR SUSTRACION
        /= OPERADOR DIVISION
        *= OPERADOR MULTIPLICACION
        ++ INCREMENTO o POSTINCREMENTO
        -- DECREMENTO O POSTDECREMENTO
    */

// EJERCICIO 3
var x = 10;
var y = 20;
var z = 30;

if (x > y) {
    if (x > z) {
        printf("X es el mayor");
    } else {
        printf("Z es el mayor");
    }
} else if (y > z) {
    printf("Y es el mayor");
} else {
    printf("Z es el mayor");
}