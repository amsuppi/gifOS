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
    } else{
        document.getElementById("archivoCss").href = black;
    }

}




