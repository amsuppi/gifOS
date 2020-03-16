function getStreamAndRecord(){

    navigator.mediaDevices.getUserMedia({
        audio:false,
        video: {
            height: {
                max:400
            }
        }
    }).then(function(stream){
        var video = document.querySelector('video');
        video.srcObject = stream;
        
        video.onloadeddata = function(e){
            video.play();
        }

    })/*.catch(function (err) {

        console.log(err.name + ":" + err.message);
        
    })*/
}