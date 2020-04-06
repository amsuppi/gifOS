const url = "https://upload.giphy.com/v1/gifsapi_key=NXLRwlrJclD68iUt0t49LYzzurK0KJxq&tag=q&rating=G"

let recorder;

//Activar la camara de la computadora
function activarCamara() {
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
    }).then(function (stream) {
        var video = document.querySelector('video');
        video.srcObject = stream;
        video.play();

        // Libreria RTC para grabar video

        var btnGrabar = document.getElementById("btnCapturar");
        btnGrabar.addEventListener("click", ()=>{

            navigator.mediaDevices.getUserMedia({
                video: true
            }).then(function () {
                recorder = RecordRTC(stream, {
                    type: 'gif',
                    frameRate: 1,
                    quality: 10,
                    width: 360,
                    hidden: 240,
        
                    onGifRecordingStarted: function () {
                        console.log('started')
                    },
                });
                recorder.startRecording();
        
                recorder.camera = stream;
        
                var btnGrabar = document.getElementById("btnCapturar");
                var btnListo = document.getElementById("btnListo");
        
                btnGrabar.style.display = "none";
                btnListo.style.display = "block";
        
            });
        }
    )


        var contenedorVideo = document.getElementById("capturarVideo");
        var contenedorGris = document.getElementById("contenedorGris");

        contenedorGris.style.display = "none";
        contenedorVideo.style.display = "block";
    })

    
    }


/*function cancelar(){
    var btnCancelar = document.getElementById("cancelar");

    btnCancelar.addEventListener("click", ()=>{

        var contenedorGris = document.getElementById("contenedorGris");

        contenedorGris.style.display = "none";
    })
}*/





//Parar parar de grabar
function stop() {

    recorder.stopRecording(function () {
        
        recorder.camera.stop();
        //apagar camara y que se repita el gif

        /*var blob = recorder.getBlob();
            video.src = URL.createObjectURL(blob);
            video.play();*/


        let form = new FormData();

        form.append('file', recorder.getBlob(), "miGif.gif");

        console.log(form.get('file'))

        var botonSubir = document.getElementById("subirGifo");
        var btnListo = document.getElementById("btnListo");
        var repetirCaptura = document.getElementById("repetirCaptura");

        btnListo.style.display = "none";
        repetirCaptura.style.display = "block";
        botonSubir.style.display = "block";


        botonSubir.addEventListener("click", () => {

            var video = document.querySelector("video");
            var progress = document.getElementById("pantallaProgress");


            video.style.display = "none";
            progress.style.display = "block";

            /*barra de carga*/

            fetch("https://upload.giphy.com/v1/gifs?api_key=NXLRwlrJclD68iUt0t49LYzzurK0KJxq&tag=q&rating=G", {
                    method: "POST",
                    body: form
                }).then(response => {
                    return response.json();

                }).then(json => {
                    var gifId = json.data.id;

                    fetch('http://api.giphy.com/v1/gifs/' + gifId + '?api_key=NXLRwlrJclD68iUt0t49LYzzurK0KJxq&tag=q&rating=G')
                        .then(response => {
                            return response.json();
                        }).then(
                            json => {
                                console.log("Your gif" + gifId);

                                localStorage.setItem('gif' + json.data.id, JSON.stringify(json));

                                

                            })
                })
                .catch(error => console.error('Error:', error))
        })

        recorder.destroy();
        recorder = null;
    })

    

}


function misGifs() {

    for (let i = 0; i < localStorage.length; i++) {

        var div = document.getElementById("mis-gifos");
        var x = document.createElement("img");
        div.appendChild(x);
        var item = localStorage.getItem(localStorage.key(i));
        if(item.includes('data')){
            var itemJson = JSON.parse(item);

            console.log(itemJson);

            x.src = itemJson.data.images.original.url;
        }
        x.className = "mis-gifs";
        x.id = "mis-gifs";
    }
}

document.addEventListener("DOMContentLoaded", misGifs);



/*function stop(blobURL) { //no recibiría ningun parametro, no es necesario
recorder.stopRecording(function () { //a la funcion callback la definiria aparte
// necesitamos detener la grabacion -> recorder.camera.stop();
let form = new FormData();
form.append('file', recorder.getBlob(), blobURL); // cambiar blobURL por un string por ej. 'test.gif'
console.log(form.get('file'))
//acá le agregaría un handler al boton "Subir". si le hacen click entonces llamo a la función que hace el fetch
//ejemplo
//botonUpload.addEventListener('click', () => {
// animar la barra de progreso
// llamar a la funcion que hace el fetch -> uploadGif(form) y le paso el form como parametro
//}
//dentro de la funcion uploadGif(form) hago el fetch
fetch("https://upload.giphy.com/v1/gifs?api_key=NXLRwlrJclD68iUt0t49LYzzurK0KJxq&tag=q&rating=G", {
method: "POST",
body : form
}).then(response => {
return response.json();
}).then(
json => {
console.log (json);
})
.catch(error => console.error('Error:', error))
//ademas agregaria un .then que reciba el reciba el id del gif subido
//por ej. const giftId = data.data.id;
//y luego llamaria a otra funcion que agregue en el localStorage los detalles del gif subido
//por ej. despues del GET fetch dentro del.then(data => {
// localStorage.setItem('gif' + data.data.id, JSON.stringify(data));
//para mostrar esta info hago una funcion que recorra el localStorage y voy sacando los elementos y mostrandolo en la seccion mis guifos
//Luego modifico el DOM para que no se muestren algunos botones
//y por ultimo libero los recursos
//recorder.destroy();
//recorder = null;
localStorage.setItem( form , "image/gif");
var misGifs = localStorage.getItem(form);
for (let i = 0; i < misGifs.length; i++) {
console.log(misGifs[i]);
}
});*/