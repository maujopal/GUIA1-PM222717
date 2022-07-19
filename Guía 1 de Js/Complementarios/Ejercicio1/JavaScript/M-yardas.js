var n1=prompt("Conversion de M a YD, digite un valor:");

const Yarda=1.09361;


var rconversion= n1*Yarda;
var rconversion2 = rconversion.toFixed(2);


document.write("<h1>Metros a convertir: "+n1+"</h1>");
document.write("<h1>La conversion de M a YD es: " + rconversion2 + "yd</h1>");