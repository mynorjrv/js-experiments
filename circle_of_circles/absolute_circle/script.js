const divs = document.querySelectorAll('div.punto');

// divs.forEach(div => {
//     div.style.position = 'absolute'; // Or 'relative', 'fixed', 'sticky', etc.
// });
const tops = ["10px", "20px", "30px", "40px", "50px", "60px", "70px", "80px", "90px", "100px", "110px", "120px"];
const lefts = ["10px", "20px", "30px", "40px", "50px", "60px", "70px", "80px", "90px", "100px", "110px", "120px"];

// JAJAJAJAJJAA RE MAL
// for (let div in divs) {
//     for (let top in tops) {
//         div.style.top = top;
//     }
//     for (let left in lefts) {
//         div.style.left = left;
//     }
// }

// Una mejor forma
// for (let i = 0; i < divs.length; i++) {
//     divs[i].style.top = tops[i];
//     divs[i].style.left = lefts[i];
// }

// divs.forEach((div, i) => {
//     div.style.top = tops[i];
//     div.style.left = lefts[i];
// });

// sin los arrays
divs.forEach((div, i) => {
    div.style.top = i * 100 + "px";
    div.style.left = i * 100 + "px";
});