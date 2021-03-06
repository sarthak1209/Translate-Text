var inputText = document.querySelector("#txt-input");
console.log(inputText);
var translateButton = document.querySelector("#btn-translate");
var outputText = document.querySelector("#output-section");


var serverUrl = "https://api.funtranslations.com/translate/minion.json";



function constructUrl(input) {
    var url = serverUrl + "?" + "text=" + input;
    //console.log(url);
    return url;
}

function errorHandeler(error) {
    console.log("An error occured", error);
    alert("Server is not responding!!!, Please try again after some time..")
}



function clickHandeller() {
    var input = inputText.value;
    //sconsole.log(input);

    if (input.length != 0) {
        fetch(constructUrl(input))
            .then(res => res.json())
            .then(json => {
                let displayText = json.contents.translated;

                outputText.innerText = displayText;
            }).catch(errorHandeler);
    } else {
        alert("Please type some text to translate....")
    }


}


translateButton.addEventListener("click", clickHandeller);