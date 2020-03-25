var trending = "https://api.giphy.com/v1/gifs/trending?api_key=NXLRwlrJclD68iUt0t49LYzzurK0KJxq&limit=25&rating=G"
var sugerencias = "https://api.giphy.com/v1/gifs/translate?api_key=NXLRwlrJclD68iUt0t49LYzzurK0KJxq&s="
let apiKey = "NXLRwlrJclD68iUt0t49LYzzurK0KJxq"
//------------------------------------
    fetch(trending)
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);

            for (let i = 0; i < json.data.length; i++) {
                console.log(json.data[i].images.original.url);

               document.getElementById("contenedo-trending").src = json.data[0].images.original.url;
                document.getElementById("contenedo-trending2").src = json.data[1].images.original.url;
                document.getElementById("contenedo-trending3").src = json.data[2].images.original.url;
                document.getElementById("contenedo-trending4").src = json.data[3].images.original.url;

            }

        })
        .catch(error => {
            return error;
        });


        

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