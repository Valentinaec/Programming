const canvas = document.querySelector('#drawingCanvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const computadora = document.createElement('img');
const phone = document.createElement('img');

computadora.src = 'image/compu.png';
phone.src = 'image/phone.png';

let pincel = computadora;

const context = canvas.getContext('2d');

const handleMouseMov = (event) => {
    const left = event.clientX;
    const top = event.clientY;

    context.drawImage(pincel, left, top);
}

const handleClick = () => {

    if (pincel === computadora){
        pincel = phone;
    } else {
        pincel = computadora;
    }
}

canvas.addEventListener('click', handleClick);
canvas.addEventListener('mousemove', handleMouseMov);