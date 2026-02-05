const canvas = document.querySelector('#draw'); //getElementById would work too
const ctx = canvas.getContext('2d'); //you don't draw on canvas element, you draw on ctx (for context), it can be 2d or 3d.

//this will make drawing window, the same size as the user's current window size:
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.font = "bold 50px Arial";
ctx.fillText("Start Drawing!", 960, 240);
//The strokeStyle property sets or returns the color, gradient, or pattern used for strokes.
ctx.strokeStyle = 'red';

//The CanvasRenderingContext2D.lineJoin property of the Canvas 2D API determines the shape used to join two line segments where they meet, in our case they will be rounded:
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
//dummy variable, that would be responsive on true/false click/hover when painting:
let isDrawing = false;

//position points of the start and end of the drawing line:
let lastX = 0;
let lastY = 0;

//pattern/color parameter, similar to RGB, but goes 0 - 360:
let hue = 0;

//
let direction = true;
//EVENT function will be called when the mouse will be hovered over the canvas:
function draw(e) {
   if(!isDrawing) return; //will stop function from drawing when they are not moused down
   console.log(e);
   ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;//hsl = hue, saturation, lightness.
   ctx.beginPath(); // starts the drawing path
   ctx.moveTo(lastX, lastY); // ends the drawing path
   ctx.lineTo(e.offsetX, e.offsetY);
   ctx.stroke();

   //drawing now always starts at 0, we need to update our lastX/lastY to the e.offsetX/e.offsetY positions:
   //Variant #1:
   lastX = e.offsetX;
   lastY = e.offsetY;
   //Variant #2(destructuring array):
   //[lastX, lastY] = [e.offsetX, e.offsetY];
   hue++;
    if (hue>=360){
        hue = 0;//since hue is only 0 - 360, we want to reset it back to 0 once it's at 360, not to overload the CPU(?)
    }

    if (ctx.lineWidth >= 70 || ctx.lineWidth <= 5) {
        direction = !direction;
    }
    if(direction) {
    ctx.lineWidth++;
    } else {
    ctx.lineWidth--;
    }
}

canvas.addEventListener('mousedown', function (e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);