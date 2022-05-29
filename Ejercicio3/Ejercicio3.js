

    document.getElementById('comprueba').addEventListener("click",comparar);
    function comparar(){

    // entrada de datos

    let lado1 = Number(document.getElementById('lado1').value);
    let lado2 = Number(document.getElementById('lado2').value);
    let lado3 = Number(document.getElementById('lado3').value);

    
    // evaluar que tipo de triangulo es
    if (lado1 == lado2 && lado2 == lado3){
        resultado = "El triangulo es equilatero";
    } else {
    if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        resultado = "El triangulo es isosceles";
    } else {
        resultado = "El triangulo es escaleno";
    }
 }

 // mostrar resultado
    document.getElementById('resultado').innerHTML = resultado;
    

}