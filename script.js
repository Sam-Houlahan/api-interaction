window.onload = function() {


    document.getElementById('button').addEventListener('click', function() {
        requestNewQuote();

    })


}

function requestNewQuote() {
    $.get("https://eda-te-reo.herokuapp.com/api/proverbs", function(response) {
        console.log(response)
        setQuote(response.source);
        setQuoteTranslate(response.translation);
    })
}


function setQuote(responseText) {
    document.getElementById('quote').innerHTML = "<h2 class='uppermargin'> Quote </h2>" + responseText;

}

function setQuoteTranslate(text) {
  document.getElementById('translate').innerHTML = "<h2>Translation</h2>" + text;
}
