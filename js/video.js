//Activar la camara de la computadora
function activarCamara() {
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            height: {
                max: 400
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
        }).then(async function(stream) {
            recorder = RecordRTC(stream, {
                type: 'gif',
                frameRate: 1,
                quality: 10,
                width: 360,
                hidden: 240,
                
                onGifRecordingStarted: function() {
                 console.log('started')
               },
              }); 
            recorder.startRecording();
        
            const sleep = m => new Promise(r => setTimeout(r, m));
            await sleep(3000);
        
            recorder.stopRecording(function() {
                let blob = recorder.getBlob();
                invokeSaveAsDialog(blob);
            });
        });
    }

    

 