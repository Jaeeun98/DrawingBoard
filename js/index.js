const canvas  = document.querySelector('canvas');
const colors = document.querySelectorAll('.color');
const range = document.querySelector('.rangeControls');
const saveBtn = document.querySelector('saveBtn');
const fillBtn = document.querySelector('.fillBtn');
const ctx = canvas.getContext('2d');

// default
const defaultColor = colors[0].style.background;
const canvasSize = 500;
let painting = false;
let filling = false;

//why?
canvas.width = canvasSize;
canvas.height = canvasSize;

ctx.fillStyle = '#fff';
ctx.strokeStyle = defaultColor;

function stopPainting(){
	painting = false;
}
function startPainting() {
	painting = true;
}

//dwaring
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

//colorChange
function colorChange(event){    
    const color = event.target.style.background;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

//rangeChange
function rangeChange(event){
    const rangeValue = event.target.value;
    ctx.lineWidth = rangeValue;
}

//fillMode
function fillTextMode(){
    if(filling === true){
        filling = false;
        fillBtn.innerText = 'Fill'
    } else {
        filling = true;
        fillBtn.innerText = 'Faint';
    }
}
function canvasFill(){
    if(filling){
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

 canvas.addEventListener('mousemove', onMouseMove);
 canvas.addEventListener('mousedown', startPainting);
 canvas.addEventListener('mouseup', stopPainting);
 canvas.addEventListener('mouseleave', stopPainting);
 canvas.addEventListener('click', canvasFill);


Array.from(colors).forEach(color =>
    color.addEventListener('click', colorChange)
);
range.addEventListener('input', rangeChange);
fillBtn.addEventListener('click', fillTextMode);
