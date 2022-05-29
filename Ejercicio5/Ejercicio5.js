

    document.getElementById('tipo').addEventListener("click",Comprobar);
function Comprobar() {

    
    let cadena = document.getElementById('cadena').value;
    let resultado ="" ; 

    if(cadena === cadena.toUpperCase()) {
      resultado += " En mayúsculas";
    }
    else if(cadena === cadena.toLowerCase()) {
      resultado += " En minúsculas";
    }
    else {
      resultado += " En mayúsculas y minúsculas";
    }


    return document.getElementById('resultado').innerHTML = "La cadena esta escrita: "+resultado;
    
}

