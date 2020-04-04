var contenedoreGris = document.getElementById("contenedorGris");

//---------------------------------------------------------------

const url = "https://upload.giphy.com/v1/gifsapi_key=NXLRwlrJclD68iUt0t49LYzzurK0KJxq&tag=q&rating=G"



//Activar la camara de la computadora
function activarCamara() {
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            width: {
                max: 800
            }
        }
    }).then(function (stream) {
        var video = document.querySelector('video');
        video.srcObject = stream;
        video.onloadeddata = function (e) {
            video.play();
        }
    })
}

// Libreria RTC para grabar video
function grabar() {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then(async function (stream) {
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

    });

    document.getElementById("contenedorGris").remove();
}

//Parar parar de grabar
function stop(blobURL) {
    recorder.stopRecording(function () {

        /* apagar la camara*/ 

        let form = new FormData();
        form.append('file', recorder.getBlob(), "miGif.gif");

        console.log(form.get('file'))

        var botonSubir =  document.getElementById("subirGifo");

        botonSubir.addEventListener("click", ()=>{

            /*barra de carga*/

                fetch("https://upload.giphy.com/v1/gifs?api_key=NXLRwlrJclD68iUt0t49LYzzurK0KJxq&tag=q&rating=G", {
                    method: "POST",
                    body : form
                }).then(response => {
                    return response.json();

                }).then(json =>{
                    var gifId = json.data.id;

                    fetch('http://api.giphy.com/v1/gifs/' + gifId + '?api_key=NXLRwlrJclD68iUt0t49LYzzurK0KJxq&tag=q&rating=G')
                    .then(response => {
                        return response.json();
                    }).then(
                        json => {
                            console.log ("Your gif" + gifId);

                            localStorage.setItem('gif' + json.data.id, JSON.stringify(json));

                            var misGifs = localStorage.getItem('gif');

                            for (let i = 0; i < misGifs.length; i++) {
                                console.log(misGifs[i]);
                                }
                    })
                })
                .catch(error => console.error('Error:', error))
            })

    });

}

    /*fetch('http://api.giphy.com/v1/gifs/' + dataId + '?&api_key=' + 'znXEZG58twcEoPcbw5gG4a7F9I990uaL')
    then(res => {
      console.log(res.status)
      if (res.status != 200) {
        // Mostrar que hubo un error subiendo tu Guifo
      }
      return res.json();
    })
      .catch(error => {
        // Mostrar que hubo un error subiendo tu Guifo
        console.error('Error:', error)
      })
    console.log(form.get('file'))
  })
})
}*/
/*

 
 var miObjeto = { 'marcado': 'html5', 'estilo': 'css3', 'comportamiento': 'js' };

// Guardo el objeto como un string
localStorage.setItem('datos', JSON.stringify(miObjeto));

// Obtengo el string previamente salvado y luego
var guardado = localStorage.getItem('datos');

console.log('objetoObtenido: ', JSON.parse(guardado));*/

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

