const canvas  = document.querySelector('canvas');
const color = document.querySelectorAll('.color');
const range = document.querySelector('.rangeControls');
const saveBtn = document.querySelector('saveBtn');
const fillBtn = document.querySelector('.fillBtn');
const ctx = canvas.getContext('2d');

// default
const defaultColor = color[0].style.background;
const canvasSize = 500;
let painting = false;
let filling = false;

canvas.width = canvasSize;
canvas.height = canvasSize;

ctx.fillStyle = '#fff';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = defaultColor;



function stopPainting(){
	painting = false;
}
function startPainting() {
	painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

if(canvas){
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);

}