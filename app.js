var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output-div");

const serverUrl = "https://api.funtranslations.com/translate/yoda.json"

function generateUrl(text) {
    return (serverUrl + "?text=" + text);
}

function errorHandler(err){
    alert("Something is wrong with server, please try later.");
    console.log("error occured " + err);
}

function clickEventHandler() {
    let inputText = txtInput.value;
    if(inputText===""){
        alert("Enter a valid text");
        return;
    }
    fetch(generateUrl(inputText))
    .then(response => response.json())
    .then(function displayOutput(jsonObj) {
        let translatedText = jsonObj.contents.translated;
        outputDiv.innerText = translatedText;
        outputDiv.setAttribute("style", "color:black;");
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickEventHandler);