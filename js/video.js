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
        btnGrabar.addEventListener("click", () => {

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
        })

        var contenedorVideo = document.getElementById("capturarVideo");
        var contenedorGris = document.getElementById("contenedorGris");

        contenedorGris.style.display = "none";
        contenedorVideo.style.display = "block";
    })


}

//Parar parar de grabar
function stop() {

    recorder.stopRecording(function () {

        recorder.camera.stop();

        video.style.display = "none";

        var div = document.getElementById("preview");
        var img = document.createElement("img");
        div.appendChild(img);

        img.src = URL.createObjectURL(recorder.getBlob());

        img.className = "img-gif";


        let form = new FormData();

        form.append('file', recorder.getBlob(), "miGif.gif");

        console.log(form.get('file'))

        var botonSubir = document.getElementById("subirGifo");
        var btnListo = document.getElementById("btnListo");
        var repetirCaptura = document.getElementById("repetirCaptura");

        btnListo.style.display = "none";
        repetirCaptura.style.display = "block";
        botonSubir.style.display = "block";
        

        
        botonSubir.addEventListener("click", (recorder) => {

            var video = document.querySelector("video");
            var progress = document.getElementById("pantallaProgress");


            video.style.display = "none";
            progress.style.display = "block";
            img.style.display = "none";

            

            fetch("https://upload.giphy.com/v1/gifs?api_key=NXLRwlrJclD68iUt0t49LYzzurK0KJxq&tag=q&rating=G", {
                    method: "POST",
                    body: form
                }).then(response => {
                    return response.json();

                }).then(json => {

                
                    var gifId = json.data.id;
                    
                    var contenedorVideo = document.getElementById("capturarVideo");
                    var popup = document.getElementById("popup");

                    contenedorVideo.style.display = "none";
                    popup.style.display = "block";

                    

                    fetch('http://api.giphy.com/v1/gifs/' + gifId + '?api_key=NXLRwlrJclD68iUt0t49LYzzurK0KJxq&tag=q&rating=G')
                        .then(response => {
                            return response.json();
                        }).then(
                            json => {
                                console.log("Your gif" + gifId);

                                var div = document.getElementById("mis-gifos");
                                var x = document.createElement("img");
                                div.appendChild(x);

                                x.className = "img-gifs";

                                x.src = json.data.images.original.url;

                                var imagen = document.getElementById("img-preview");
                                imagen.src = json.data.images.original.url;

                                

                                

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
        if (item.includes('data')) {
            var itemJson = JSON.parse(item);

            console.log(itemJson);

            x.src = itemJson.data.images.original.url;
        }
        x.className = "img-gifs";
        x.id = "img-gifs";
    }
}

document.addEventListener("DOMContentLoaded", misGifs);

function listo(){
 
    var popup = document.getElementById("popup");

    popup.style.display = "none";

}

