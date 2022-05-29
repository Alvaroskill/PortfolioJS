


document.getElementById('letraDni').addEventListener("click",letraDni);
function letraDni(){

    // declarar variables

    let dni = Number(document.getElementById('dni').value);
    const letra = "TRWAGMYFPDXBNJZSQVHLCKE";

    // calculo de la letra

    let resto = dni % 23;
    
    let letraDni = letra.substring(resto, resto + 1);

    // mostrar resultado

    document.getElementById('letra').innerHTML = "La letra es: " + letraDni;


}