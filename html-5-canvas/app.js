const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');

// set width and height of canvas using window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.stroke = '#BADA55';
content.lineJoin = 'round';
context.lineCap = 'round';
content.lineWidth = 100;

// line direction and style variables
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(event) {
  if (!isDrawing) return; // stop mouse from drawing when it is not being click but still moving
  console.log(event); // TEST
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  // start from
  context.moveTp(lastX, lastY);
  // go to
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();
  [lastX, lastY] = [event.offsetX, event.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction;
  }

  if(direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--
  }
}

canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY]
});

canvas.addEventListener('mousedown', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
