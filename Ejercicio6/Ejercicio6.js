document.getElementById('comprobar').addEventListener("click",esPalindromo);
function esPalindromo() {
    let cadena = document.getElementById('cadena').value;
    let numchar = cadena.length;
    // eliminamos los espacios en blanco y mayusculas /minusculas
    cadena = cadena.toLowerCase();
	var car;
	var cadena_espac = "";
	var cadena_reves = "";

    for (i = 0; i < numchar; i++) {
		car = cadena.charAt(i);
                //Si el caracter es un espacio
		if (car != " ") {
			cadena_espac += car;
			cadena_reves = car + cadena_reves;
		}
	}
    if (cadena_espac == cadena_reves) {
            document.getElementById("resultado").innerHTML = ("La palabra es Palindroma");
        
    }
    else {
    document.getElementById("resultado").innerHTML = ( "La palabra no es Palindroma");
        
}
}
