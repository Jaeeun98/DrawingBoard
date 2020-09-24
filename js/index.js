const canvas  = document.querySelector('canvas');
const colors = document.querySelectorAll('.color');
const range = document.querySelector('.rangeControls');
const saveBtn = document.querySelector('saveBtn');
const fillBtn = document.querySelector('.fillBtn');
const resetBtn = document.querySelector('.resetBtn');
const ctx = canvas.getContext('2d');

// default
const defaultColor = colors[0].style.background;
let painting = false;
let filling = false;

canvas.width = 500;
canvas.height = 500;

ctx.fillStyle = '#fff';
ctx.strokeStyle = defaultColor;

//stop, start
const stopPainting = () => painting = false;
const startPainting = () => painting = true;

//dwaring
const onMouseMove = event =>{
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
const colorChange = event => {    
    const color = event.target.style.background;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

//rangeChange
const rangeChange = event => {
    const rangeValue = event.target.value;
    ctx.lineWidth = rangeValue;
}

//fillMode
const fillText = () => {
    if(filling === true){
        filling = false;
        fillBtn.innerText = 'Fill'
    } else {
        filling = true;
        fillBtn.innerText = 'Faint';
    }
}
const canvasFill = () => {
    if(filling){
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

//save
const saveClick = () => {
    const imgURL = canvas.toDataURL();
    const link = document.createElement('a');
    link.href = imgURL;
    link.download = 'paintJS';
    link.click();
}

//reset
const resetclick = () => {
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

//addEvent
canvas.addEventListener('mousemove', onMouseMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', stopPainting);
canvas.addEventListener('mouseleave', stopPainting);
canvas.addEventListener('click', canvasFill);

Array.from(colors).forEach(color =>
    color.addEventListener('click', colorChange)
);
range.addEventListener('input', rangeChange);
fillBtn.addEventListener('click', fillText);
saveBtn.addEventListener('click', saveClick);
resetBtn.addEventListener('click', resetclick);