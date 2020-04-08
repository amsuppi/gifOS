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
        document.getElementById("iconoLogo").src = "assets/logoceleste.png";
    } else{
        document.getElementById("archivoCss").href = black;
        document.getElementById("iconoLogo").src = "assets/logorosa.png";
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

 function drop(){
    var contentVideo = document.getElementById("drop2");

    if (contentVideo.style.display == "none") {
        contentVideo.style.display = "block";
    } else {
        contentVideo.style.display = "none";
    } 
 }



 function cambiarEstilosVideo(id){

    const rosa = 'styles2/styles.css'
    const dark = 'styles2/stylesDark.css'

    if (id == "opcionRosaVideo"){

        document.getElementById("stylesCss").href = rosa;
        document.getElementById("logo").src = "assets/logoceleste.png";
    } else{
        document.getElementById("stylesCss").href = dark;
        document.getElementById("logo").src = "assets/logorosa.png";
        
    }
 }




