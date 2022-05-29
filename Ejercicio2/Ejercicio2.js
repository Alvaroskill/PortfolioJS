/* Javascript para el ejercicio 2 del portfolio */


document.getElementById('calcular').addEventListener("click",calcular);
function calcular(){

    // Obtenemos los valores de los inputs

    const PI = 3.141592653589793; // no sería necesario declararlo como constante
    let radio = Number(document.getElementById('radio').value);

    // realizar calculos del area
    let circunferencia = 2 * Math.PI * radio;
    let circulo = Math.PI * Math.pow(radio, 2);
    let esfera = Math.PI * Math.pow(radio, 3);



    // mostrar resultados y refactorizar el código para que no se repita el código
    // te atreves a refactoriar la salida de los resultados

    // primer nodo li creado y encganchado al arbol original
    // 1- creamos el nodo li

    let nuevoNodo = document.createElement('li');

    // 2- meter contendio en el nodo li
    nuevoNodo=document.createElement("li");
    nuevoNodo.innerHTML = "La longitud de la circunferencia es: " + circunferencia.toFixed(2);
    document.getElementById("resultados").appendChild(nuevoNodo);

    nuevoNodo=document.createElement("li");
    nuevoNodo.innerHTML = "La longitud del círculo es: " + circulo.toFixed(2);
    document.getElementById("resultados").appendChild(nuevoNodo);

    nuevoNodo=document.createElement("li");
    nuevoNodo.innerHTML = "La longitud de la esfera es: " + esfera.toFixed(2);
    document.getElementById("resultados").appendChild(nuevoNodo);
}   