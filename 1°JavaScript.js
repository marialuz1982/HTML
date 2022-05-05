//Comentario de una linea
/* Comentario 
*Multilinea*/

//Funciones
function ejecuta(){
    /*el documento (HTML) detecta el nombre de la etiqueta (devuelve un array de elementos) hay que indicar cual es 
    la que quiero que ejecute la funcion */
    //document.getElementsByTagName("p")[2].onclick=saludo;
   //document.getElementById("importante").onclick=saludo;
   //Recorrer el array de elementos p
   /*for(var i=0;i<3;i++){
    document.getElementsByTagName("p")[i].onclick=saludo;
   }*/
   //Tambien devuelve un array, necesito crear una variable con este metodo
   var z=document.getElementsByClassName("importante")[0].onclick=saludo;
}


function saludo(){
    alert("Hola mundo")
}

//Llama a  la funcion y cuando carga la ventana ejecuta la funcion (evento de ventana)
window.onload=ejecuta; 







