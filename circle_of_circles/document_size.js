// https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions
//
// For some reason, getting the size is difficult xd
//

let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

let viewportWidth = vw;
let viewportHeight = vh;

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
