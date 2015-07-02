// wait for our page to load
document.addEventListener("DOMContentLoaded", function(event) { 
	
	// initialize our canvas
	var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d');

	// get the size of our canvas
	var canvas_width = canvas.width,
		canvas_height = canvas.height;

	// load our large image
	var img;
	img = new Image();
	img.onload = function() {

		/*
		# image is done loading, now we can paint it to the canvas

		1) 0, 0 represents the x,y of the upper left corner where we place the image

		2) canvas_width, canvas_height represents how large we want to display the image

		3) The image might have a different scaling than the canvas so we might see
		  th image stretch or shrink.
		*/

		ctx.drawImage(img, 0, 0, canvas_width, canvas_height);
	}
	img.src = "../img/telescope.jpeg";

});



