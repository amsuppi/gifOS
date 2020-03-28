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

        }

    })
    .catch(error => {
        return error;
    });


//----------------------------------------------

//search
/*var boton =  document.getElementById("search");

    boton.addEventListener("click", function(){
    var miInfo = document.getElementById("n2").value;

    console.log 

});
function getSearchResults(search) {
    const found = fetch('api.giphy.com/v1/gifs/search' + search + '&api_key=' + apiKey)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            return error;
        });
    return found;
}*/