let trending = "https://api.giphy.com/v1/gifs/trending?api_key=NXLRwlrJclD68iUt0t49LYzzurK0KJxq&limit=25&rating=G"
let sugerencias = "https://api.giphy.com/v1/gifs/random?api_key=NXLRwlrJclD68iUt0t49LYzzurK0KJxq&tag=q&rating=G"


let apiKey = "NXLRwlrJclD68iUt0t49LYzzurK0KJxq"

//------------------------------------

fetch(sugerencias)
    .then(response => {
        return response.json();
    })
    .then(json => {
        console.log(json);
   
        document.getElementById("contenedo-trending").src = json.data.images.original.url;
        document.getElementById("contenedo-trending2").src = json.data.images.original.url;
        document.getElementById("contenedo-trending3").src = json.data.images.original.url;
        document.getElementById("contenedo-trending4").src = json.data.images.original.url;

        
        
    })
    .catch(error => {
        return error;
    });

//------------------------------------------ 

fetch(trending)
    .then(response => {
        return response.json();
    })
    .then(json => {
        console.log(json);

        for (let i = 0; i < json.data.length; i++) {
        
            console.log(json.data[i].images.original.url);
            var div = document.getElementById("contenedo-tendencias");
            var x = document.createElement("img");
            div.appendChild(x);
            x.src = json.data[i].images.original.url;
            x.className = "img-gif";
            x.id = "img-gif-tendencias";
        }
    })
    .catch(error => {
        return error;
    });


//----------------------------------------------

//search

function llamar(){
    var valor = document.getElementById("n2").value;

    var myHeaders = new Headers();
    

        fetch('https://api.giphy.com/v1/gifs/search?' + '&api_key=' + 
            apiKey + "&q=" + valor + "&limit=25&offset=0&rating=G&lang=es",{
                method: 'GET',
                headers: myHeaders
            })
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log (json);

            for (let i = 0; i < json.data.length; i++) {
        
            console.log(json.data[i].images.original.url);

            var div = document.getElementById("contenedo-tendencias");
            var x = document.getElementById("img-gif-tendencias")
            var y = document.createElement("img");
            y.src = json.data[i].images.original.url;
            y.className = "img-gif";
            y.id = "img-gif-search";
            div.replaceChild(y, x);
            }
        })
        .catch(error => {
            return error;
        });

        var tend = document.getElementById("img-gif-tendencias");

}

