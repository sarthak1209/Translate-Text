var inputText = document.querySelector("#txt-input");
console.log(inputText);
var translateButton = document.querySelector("#btn-translate");
var outputText    = document.querySelector("#output-section");


var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";


function constructUrl(input){
    var url = serverUrl + "?" + "text=" + input;
    //console.log(url);
    return url;
}



//console.log(queryUrl);
function translate(){
    var input = inputText.value;
    console.log(input);

    
    fetch(constructUrl(input)).then(res => res.json()).then(json => console.log(json));
}


translateButton.addEventListener("click", translate);

