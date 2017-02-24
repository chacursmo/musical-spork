$(document).ready(function(){
    pooEtre("https://api.twitch.tv/kraken/streams/freecodecamp");
});


function pooEtre(url){
    var request = new XMLHttpRequest();
    request.open("GET", url,true);
    request.onload = function () {
	if (this.status >= 200 && this.status < 400){
	    rawData= this.response;
	    data = JSON.parse(this.response);
	    console.log(rawData);
	}
    };
    request.send();
}



