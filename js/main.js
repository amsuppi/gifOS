function dropFunction(){
    var content = document.getElementById("drop1");

    if (content.style.display == "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    } 
 }


function cambiarEstilos(archivo){
    document.getElementById("archivoCss").href = archivo;
}


