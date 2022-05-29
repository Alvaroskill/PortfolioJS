document.getElementById('traducir').addEventListener("click", traducirNombre);
function traducirNombre(){

   const meses = {"Enero":"January",
                   "Febrero":"February",
                   "Marzo":"March",
                   "Abril":"April",
                   "Mayo":"May",
                   "Junio":"June",
                   "Julio":"July",
                   "Agosto":"August",
                   "Septiembre":"September",
                   "Octubre":"October",
                   "Nobiembre":"November",
                   "Diciembre":"December"}

   let mes = document.getElementById("mes").value;


   //let respuesta ="";

   let respuesta = (mes == "error")? "No has elegido mes. ": meses[mes];//hay que poner la variable
  /* if(numeroMes==-1)
       respuesta= "No has elegido numero";
   else
       respuesta = meses[numeroMes];*/
   

   document.getElementById("nombreMes").innerHTML=respuesta;
}
function changeColor(body)
{
   if(document.getElementsByTagName(body).style.background == "white"){

       document.body.style.background="black";

   }else{
       document.body.style.background="white";
   }
   return false;
}

document.getElementById('boton').addEventListener("click", Mycolor);
function Mycolor() {

   if(document.getElementById('color').style.backgroundColor == "white"){

       document.getElementById('color').style.backgroundColor = "black";
       document.getElementById('boton').innerHTML="Modo claro";

   } else{

       document.getElementById('color').style.backgroundColor = "white";
       document.getElementById('boton').innerHTML="Modo oscuro";
   }

}