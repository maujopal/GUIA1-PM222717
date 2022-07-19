var n1=prompt("Grados Celcius a Fahrenheit:");


const n2=1.800;
const n3=32.00;


var rconversion= n1*n2+n3;
var rconversion2 = rconversion.toFixed(2);


document.write("<h1>Los grados celcius a convertir son: "+n1+"</h1>");
document.write("<h1>Resultado de la conversión de C a F es: " + rconversion2 + "°</h1>");