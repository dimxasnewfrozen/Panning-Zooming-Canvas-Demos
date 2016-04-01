# Panning-Zooming-Canvas-Demos

A series of demos that shows how to display an image on a html5 canvas, pan around, zoom in and out

### Demo 1
Introduction to HTML5 canvas. How to initialize a canvas object and draw a colored rectangle.

[View Demo 1](http://dayobject.me/canvas/demo1)

### Demo 2
How to intialize an image object and draw it inside of the canvas

[View Demo 3](http://dayobject.me/canvas/demo2)

### Demo 3
How to calculate the scaling of an image given a predefined width and draw it to the canvas

[View Demo 3](http://dayobject.me/canvas/demo3)

### Demo 4
Initialize a bunch of canvas events: clicking (mousedown), dragging (mousemove), letting go (mouseup) and write a simple log of the events.

[View Demo 4](http://dayobject.me/canvas/demo4)

### Demo 5
Grab the coordinates of mousedown, initialize the drag event and update the distanced moved from dragging. Update the canvas image based on distanced moved/dragged.

[View Demo 5](http://dayobject.me/canvas/demo5)

### Demo 6
Keep track of how far the image moved based on previous drag events instead of resetting the image position to 0,0 every time.

[View Demo 6](http://dayobject.me/canvas/demo6)

### Demo 7
Incorporate jQuery to quickly handle/access button events for new Zoom in and Zoom out options. Use a basic 2x zoom scale and multiply the size by 2 when zooming in. Divide by 2 when zooming out. Redraw the canvas with new sizes for each zoomin/zoomout event.

[View Demo 7](http://dayobject.me/canvas/demo7)

### Demo 8
All zoom in/zoom out events were initially being draw to 0,0 for the upper left coordinate. Zoom in/out to the center of image instead of the top left. 

[View Demo 8](http://dayobject.me/canvas/demo8)

### Demo 9
Since we're calculating the center frequently, create a method that can be used throughout instead of calculating it every event. Also set the initial image display to be centered.

[View Demo 9](http://dayobject.me/canvas/demo9)

### Demo 10
Detect pinch gesture insanely easily. Draw the points to the canvas. Must be on mobile device.

[View Demo 10](http://dayobject.me/canvas/demo10)

### Demo 11
Detect pinch gesture and calculate a ratio based on how much we've moved then scale an image up/down.

[View Demo 11](http://dayobject.me/canvas/demo11)


### Demo 12
Zoom in and out on mouse wheel point (with default panning functionality)

[View Demo 12](http://dayobject.me/canvas/demo12)

