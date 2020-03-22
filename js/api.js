let apiKey = "cq2dHiXUIQsux4tIWZYG7Mj0p0HHzicx"
var miUrl = fetch("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=cq2dHiXUIQsux4tIWZYG7Mj0p0HHzicx");

//------------------------------------

 

miUrl .then(function(data) { 
    console.log(data); 
    
});



//------------- BUSCAR ----------------

function llamar(){
    var info = document.getElementById("n2").value;

    console.log(info);
}


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