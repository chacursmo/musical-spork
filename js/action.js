$(document).ready(function(){
    var bogo = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
    for (var i = 0; i < bogo.length; i++){
	buildElements(bogo[i]);
    }

});


function buildElements(name){
    var myurl = "https://wind-bow.gomix.me/twitch-api/streams/"+name;
    var theyreurl = "https://twitch.tv/"+name;
    $.ajax({
	url:myurl,
	dataType: "jsonp",
	success: function(data){
	    var online = "Offline";
	    var more = "";
	    console.log(data);
	    if (data.stream){
		online = "Online Yeah!";
		more = data.stream.game;
	    }


	    var builtHtml = "<div class='popeye'><a target='_blank' href="+theyreurl+">"+name+"</a><br>"+online+"<br>"+more+"</div><br>";
	    $(".main").append(builtHtml);

	},
	error: function(data){
	    alert("something went wrong");
	}
    });


}
