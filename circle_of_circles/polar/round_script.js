const puntos = document.querySelectorAll('div.punto');

let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;

// let puntoDiameter = divs[0].style.width;
let diameter = parseFloat(getComputedStyle(divs[0]).width);

let centerX = viewportWidth / 2;
let centerY = viewportHeight / 2;

let radius = 500;

puntos.forEach((punto, i) => {
    let angle = (i / puntos.length) * 2 * Math.PI;

    let x = centerX + radius * Math.cos(angle) - diameter / 2;
    let y = centerY + radius * Math.sin(angle) - diameter / 2;

    punto.style.left = x + "px";
    punto.style.top = y + "px";
});