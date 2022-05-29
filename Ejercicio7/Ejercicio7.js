

document.getElementById('calcular').addEventListener("click",calcular);
function calcular(){

    // Declaracion de variables

    let dividendo = Number(document.getElementById('dividendo').value);
    let divisor = Number(document.getElementById('divisor').value);
    let cociente = 0;

    // Calculo de la division por el algoritmo de Euclides

    while (dividendo >= divisor) {
        dividendo -= divisor;
        cociente++;
    }

    // Mostrar resultado

    document.getElementById('resultado').innerHTML = "El cociente es: " + cociente + " y el resto es: " + dividendo;
    

}