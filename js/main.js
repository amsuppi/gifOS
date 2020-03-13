const common = 'styles/styles.css'
const black = 'styles/stylesDark.css'

function dropFunction(){
    var content = document.getElementById("drop1");

    if (content.style.display == "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    } 
 }

function cambiarEstilos(id){
    if (id == "opcionRosa"){
        document.getElementById("archivoCss").href = common;
    } else{
        document.getElementById("archivoCss").href = black;
    }

}


