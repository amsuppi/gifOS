let apiKey = "cq2dHiXUIQsux4tIWZYG7Mj0p0HHzicx"
var miUrl = fetch("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=cq2dHiXUIQsux4tIWZYG7Mj0p0HHzicx");

//------------------------------------
 var boton =  document.getElementById("search");
 

miUrl .then(function(data) { 
    for (let i = 0; i < data.length; i++) {
        createImageBitmap(data[i].images.original.url);
        
    }
    console.log(data); 
    
});

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
}