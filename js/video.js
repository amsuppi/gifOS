var contenedoreGris = document.getElementById("contenedorGris");

//---------------------------------------------------------------

const url = "https://upload.giphy.com/v1/gifsapi_key=NXLRwlrJclD68iUt0t49LYzzurK0KJxq&tag=q&rating=G"

var stream;

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

function stop(blobURL) {
    recorder.stopRecording(function () {
        let form = new FormData();
        form.append('file', recorder.getBlob(), blobURL);

        console.log(form.get('file'))

            
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


    localStorage.setItem( form , "image/gif");

    var misGifs = localStorage.getItem(form);

    for (let i = 0; i < misGifs.length; i++) {

        console.log(misGifs[i]);
    }

    });

   
}



