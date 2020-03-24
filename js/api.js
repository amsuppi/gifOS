var miUrl = "//api.giphy.com/v1/gifs/trending?api_key=NXLRwlrJclD68iUt0t49LYzzurK0KJxq&limit=25&rating=G"
let apiKey = "NXLRwlrJclD68iUt0t49LYzzurK0KJxq"
//------------------------------------

fetch (miUrl)
.then(response => {
    return response.json();
}).then(json => {
    console.log(json);
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