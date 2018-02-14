/*
    alert ("Visualiza mensaje");
    variable = prompt ("mensaje");
    
    parseInt (texto); convierte el texto en número
    parseFloat (texto); convierte el texto en numero flotante
    
    if (Si Condicional)
    if(condicion) accion;
    if(condicion) accion1;
        else accion2;
    if(condicion) {
        accion1;
        accion2;
        accionN;
    }
    if(condicion) {
        accion1;
        accion2;
        accionN;
    } else {
        accion1;
        accion2;
        accionN;
    }

    > MAYOR
    < MENOR
    >= MAYOR O IGUAL
    <= MENOR O IGUAL
    != DISTINTO, NO IGUAL
    == IGUAL A
    === ESTRICTAMENTE IGUAL

    x = 10;
    y = 20;
    if (x>y) console.log("X es mayor");
    else if (x<y) console.log("X es menor");
    else console.log("son iguales");
    
    if (condicion) {
        accion;
    } else {
        accion;
    }

    if (a>100 && b>200) {
        console.log("OK");
    }
    if (a>100 || b>200) {
        console.log("OK");
    }

    &&                      ||
    v v = v                 v v = v
    v f = f                 v f = v
    f v = f                 f v = v
    f f = f                 f f = f

    if (ciudad=="Elche" && ciudad=="Alicante") {
        console.log("OK");
    }
    if (edad>=40 && edad<=50) {
        console.log("OK");
    }
    if ((edad!=40 && ciudad=="Elche") || (edad<=50 && ciudad=="Alicante")) {
        console.log("OK");
    }
*/

var precio;
var cantidad;
var iva;
var descuento;

precio = prompt ("Dime el precio");
precio = parseFloat (precio);
cantidad = prompt ("Dime la cantidad");
cantidad = parseFloat (cantidad);
iva = parseFloat(prompt("Dime IVA"));    

var importe;
    importe = precio * cantidad;
    if(cantidad<100) {
        descuento = 10;
    } else {
        descuento = 20;
    }
var eurodescuento;
    eurodescuento = importe * (descuento/100);
var importecondescuento = importe - eurodescuento;
var eurosiva;
    eurosiva=importecondescuento * (iva/100);
var totalfactura;
    totalfactura = importecondescuento + eurosiva;
if (totalfactura>1000) {
    console.log("El mejor cliente");
}
console.log("El importe es: "+importe);
console.log("El total es: "+totalfactura);