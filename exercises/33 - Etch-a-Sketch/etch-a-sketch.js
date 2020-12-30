// select elements
const etchasketch = document.querySelector(`#etch-a-sketch`);
const context = etchasketch.getContext(`2d`);
const shakebutton = document.querySelector(`.shake`);

// canvas configurations
context.lineJoin = `round`;
context.lineCap = `round`;
context.lineWidth = 10;
const MOVE_AMOUNT = 10;
let hue = 0;
context.strokeStyle = `hsl(${hue}, 100, 50%)`;

const { width, height } = etchasketch;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

context.beginPath(); // start drawing
context.moveTo(x, y);
context.lineTo(x, y);
context.stroke();

// draw function
function draw({ key }) {
  context.beginPath();
  context.moveTo(x, y);
  hue += 1;
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  switch (key) {
    case `ArrowUp`:
      y = y - MOVE_AMOUNT;
      break;
    case `ArrowDown`:
      y = y + MOVE_AMOUNT;
      break;
    case `ArrowRight`:
      x = x + MOVE_AMOUNT;
      break;
    case `ArrowLeft`:
      x = x - MOVE_AMOUNT;
      break;
    default:
      break;
  }
  context.lineTo(x, y);
  context.stroke();
}

// key handler
function handleKey(event) {
  if (event.key.includes(`Arrow`)) {
    event.preventDefault();
    draw({ key: event.key });
  }
}
//shake function

// event listeners
window.addEventListener(`keydown`, handleKey);
