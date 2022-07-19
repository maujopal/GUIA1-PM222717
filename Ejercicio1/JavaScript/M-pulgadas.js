var n1=prompt("Conversion de M a IN, digite un valor:");

const Pulgada=39.3701;


var rconversion= n1*Pulgada;
var rconversion2 = rconversion.toFixed(2);


document.write("<h1>Metros a convertir: "+n1+"</h1>");
document.write("<h1>La conversion de M a IN es: " + rconversion2 + "in</h1>");