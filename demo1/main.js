// wait for our page to load
document.addEventListener("DOMContentLoaded", function(event) { 
	
	// initialize our canvas
	var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d');

	ctx.fillStyle = "#FF0000";
	ctx.fillRect(0,0,150,75);
	
});



