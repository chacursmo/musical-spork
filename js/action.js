$(document).ready(function(){
    var bogo = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    for (var i = 0; i < bogo.length; i++){
	var temp = String(bogo[i]);
	var myurl = "https://wind-bow.gomix.me/twitch-api/streams/"+temp;
	$(".main").append("<div class='popeye'><a href="+myurl+">"+temp.toUpperCase()+"</></div><br>");

	/*
	$.ajax({
	    url:myurl,
	    dataType: "jsonp",
	    success: function(data){
		console.log(temp);
	    	$(".main").append("<div class='popeye'><a href="+data._links.channel+">"+data._links.channel.slice(38).toUpperCase()+"</></div><br>");
	    console.log(data._links.channel);
	    },
	    error: function(data){
		alert("money");
	    }
	});*/
    };
});





