$(document).ready(function(){
    $.ajax({
	url:"https://wind-bow.gomix.me/twitch-api/streams/freecodecamp",
	dataType: "jsonp",
	success: function(data){
	    console.log(data);
	},
	error: function(data){
	    alert("money");
	}
    });
    
});





