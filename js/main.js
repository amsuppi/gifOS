const common = 'styles/styles.css'
const black = 'styles/stylesDark.css'

// dropdown con opciones para seleccionar dark/light

function dropFunction(){
    var content = document.getElementById("drop1");

    if (content.style.display == "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    } 
 }

 //opciones de seleccion de dark/light

function cambiarEstilos(id){
    if (id == "opcionRosa"){
        document.getElementById("archivoCss").href = common;
        document.getElementById("logo").src = url(".../assets/");
    } else{
        document.getElementById("archivoCss").href = black;
        document.getElementById("logo-dark").style.display = "none";
    }

}




//Seccion Buscar

function dropBuscar(){
    var input = document.getElementById("n2");

    input.addEventListener("dragenter", ()=>{

        var contenido = document.getElementById("drop2");

        console.log("toma algo");

        if (contenido.style.display == "none") {
            contenido.style.display = "block";
        } else {
            contenido.style.display = "none";
        } 

    })


   
 }




