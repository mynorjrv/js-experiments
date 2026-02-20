const divs = document.querySelectorAll('div.punto');

let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;

let puntoDiameter = divs[0].style.width;

let betweenSpace = viewportHeight - 2*puntoDiameter;
let extraSpace = viewportWidth - viewportHeight;


const lefts = [
    0.5*viewportWidth - 0.5*puntoDiameter, 
    0.5*viewportWidth + 0.5*betweenSpace,
    0.5*viewportWidth - 0.5*puntoDiameter,
    0.5*extraSpace
]
const tops = [
    0,
    0.5*viewportHeight + 0.5*puntoDiameter,
    viewportHeight - puntoDiameter,
    0.5*viewportHeight + 0.5*puntoDiameter,
]


divs.forEach((div, i) => {
    div.style.top = tops[i] + "px";
    div.style.left = lefts[i] + "px";
});
