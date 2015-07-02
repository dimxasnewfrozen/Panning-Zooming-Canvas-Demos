// wait for our page to load
document.addEventListener("DOMContentLoaded", function(event) { 
	
	// initialize our canvas
	var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d');

	var log = document.getElementById('log');

	// get the size of our canvas
	var canvas_width = canvas.width,
		canvas_height = canvas.height;

	var canvasPos = {"deltaX": 0, "deltaY": 0};

	var initialImageWidth = 500;
	var newImageHeight = 0;

	// load our large image
	var img;
	img = new Image();
	img.onload = function() {

		/*
		# image is done loading, now we can paint it to the canvas

		1) 0, 0 represents the x,y of the upper left corner where we place the image

		2) canvas_width, canvas_height represents how large we want to display the image

		3) The image might have a different scaling than the canvas so we might see
		   the image stretch or shrink.

		4) let's calculate how to correctly display the image using the aspect ratio to fit
		   a pre-defined width (500px);
		*/

		var image_height = img.height;
		var image_width = img.width;
		newImageHeight = image_height / image_width * initialImageWidth;

		ctx.drawImage(img, 0, 0, initialImageWidth, newImageHeight);
	}
	img.src = "../img/telescope.jpeg";


	// our event object that handled clicking (mousedown), mousemove (dragging), mouseup (enddragging)
	var events = {

		dragging: false,
		mouseX: 0,
		mouseY: 0,
		mouseDown: function(e)
		{	

			// get the current mouse position (DRAGSTART)
			var r = canvas.getBoundingClientRect();
			events.mouseX = (e.clientX - r.left) - canvasPos.deltaX;
			events.mouseY = (e.clientY - r.top) - canvasPos.deltaY;

			log.innerHTML += 'User clicked at: ' + events.mouseX + ", " + events.mouseY + '! <br/>';
			log.scrollTop = log.scrollHeight;
			dragging = true;

		},
		
		mouseMove: function(e)
		{
			if (dragging)
			{	
				// get the current mouse position (updates every time the mouse is moved durring dragging)
				var r = canvas.getBoundingClientRect();
		        var x = e.clientX - r.left;
		        var y = e.clientY - r.top;

		        // calculate how far we moved
		        canvasPos.deltaX = (x - events.mouseX); // total distance in x
				canvasPos.deltaY = (y - events.mouseY); // total distance in y

				// we need to clear the canvas, otherwise we'll have a bunch of overlapping images
				ctx.clearRect(0,0, canvas_width, canvas_height);

				// these will be our new x,y position to move the image.
				ctx.drawImage(img,  canvasPos.deltaX, canvasPos.deltaY, initialImageWidth, newImageHeight);

				log.innerHTML += 'User is dragging to: ' + x + ", " + y + ' <br/>';
				log.scrollTop = log.scrollHeight;
			}
		},

		mouseUp: function (e) {
			log.innerHTML += 'User let go and moved a total of: ' + canvasPos.deltaX + ", " + canvasPos.deltaY + ' <br/>';

			dragging = false;
			log.scrollTop = log.scrollHeight;
		}
	}

	canvas.addEventListener('mousedown', events.mouseDown, false);
	canvas.addEventListener('mousemove', events.mouseMove, false);
	canvas.addEventListener('mouseup', events.mouseUp, false);

});



