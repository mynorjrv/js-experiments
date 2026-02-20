// const puntos = document.querySelectorAll('div.punto');

// let viewportWidth = window.innerWidth;
// let viewportHeight = window.innerHeight;

// // let puntoDiameter = divs[0].style.width;
// let diameter = parseFloat(getComputedStyle(divs[0]).width);

// let centerX = viewportWidth / 2;
// let centerY = viewportHeight / 2;

// let radius = 500;

// puntos.forEach((punto, i) => {
//     let angle = (i / puntos.length) * 2 * Math.PI;

//     let x = centerX + radius * Math.cos(angle) - diameter / 2;
//     let y = centerY + radius * Math.sin(angle) - diameter / 2;

//     punto.style.left = x + "px";
//     punto.style.top = y + "px";
// });

const puntos = document.querySelectorAll('div.punto');

let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;

// let puntoDiameter = divs[0].style.width;
let diameter = parseFloat(getComputedStyle(puntos[0]).width);

let centerX = viewportWidth/2;
let centerY = viewportHeight/2;

let radius = Math.min(
    (viewportHeight-diameter)/2, (viewportWidth-diameter)/2
);

// let betweenSpace = viewportHeight - 2*diameter;
// let extraSpace = viewportWidth - viewportHeight;

// const lefts = [
//     centerX - 0.5*diameter,
//     centerX + radius - 0.5*diameter,
//     centerX - 0.5*diameter,
//     centerX - radius - 0.5*diameter
// ];
// const tops = [
//     centerY - radius - 0.5*diameter,
//     centerY - 0.5*diameter,
//     centerY + radius - 0.5*diameter,
//     centerY - 0.5*diameter,
// ];


puntos.forEach((punto, i) => {
    let angle = (i / puntos.length) * 2 * Math.PI;

    let x = centerX + radius * Math.cos(angle) - diameter / 2;
    let y = centerY + radius * Math.sin(angle) - diameter / 2;

    punto.style.left = x + "px";
    punto.style.top = y + "px";

    // punto.style.top = tops[i] + "px";
    // punto.style.left = lefts[i] + "px";
});
