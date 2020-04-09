let trending = "https://api.giphy.com/v1/gifs/trending?api_key=NXLRwlrJclD68iUt0t49LYzzurK0KJxq&limit=25&rating=G"
let sugerencias = "https://api.giphy.com/v1/gifs/random?api_key=NXLRwlrJclD68iUt0t49LYzzurK0KJxq&tag=q&rating=G"


let apiKey = "NXLRwlrJclD68iUt0t49LYzzurK0KJxq"

//------------------------------------

fetch(trending)
    .then(response => {
        return response.json();
    })
    .then(json => {
        console.log(json);
   
        document.getElementById("contenedo-trending").src = json.data[20].images.original.url;
        document.getElementById("contenedo-trending2").src = json.data[21].images.original.url;
        document.getElementById("contenedo-trending3").src = json.data[22].images.original.url;
        document.getElementById("contenedo-trending4").src = json.data[23].images.original.url;

        var elemento = document.getElementById("title1");
        var text = document.createTextNode(json.data[20].title);
        elemento.appendChild(text);

        var elemento1 = document.getElementById("title2");
        var text = document.createTextNode(json.data[21].title);
        elemento1.appendChild(text);

        var elemento2 = document.getElementById("title3");
        var text = document.createTextNode(json.data[22].title);
        elemento2.appendChild(text);

        var elemento3 = document.getElementById("title4");
        var text = document.createTextNode(json.data[23].title);
        elemento3.appendChild(text);
        
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

            var hover = document.createElement("div");
            hover.className = "barra-bottom";
            div.appendChild(hover);
        }
    })
    .catch(error => {
        return error;
    });


//----------------------------------------------

function buscarTend(){
    var lista = document.getElementById("drop2");

        if (lista.style.display == "none") {
            lista.style.display = "block";
        } else {
            lista.style.display = "none";
        } 

}

function buscarOpciones(textContent){

        let valor = textContent;

    
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
            var x = document.getElementById("img-gif-tendencias");
            div.removeChild(x);
            var y = document.createElement("img");
            y.src = json.data[i].images.original.url;
            y.className = "img-gif";
            y.id = "img-gif-tendencias";
            div.appendChild(y);

            }
        })
        .catch(error => {
            return error;
        });

}

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
            div.removeChild(x);
            var y = document.createElement("img");
            y.src = json.data[i].images.original.url;
            y.className = "img-gif";
            y.id = "img-gif-tendencias";
            div.appendChild(y);

            }
        })
        .catch(error => {
            return error;
        });


}

