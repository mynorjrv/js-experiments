const buble = document.querySelector('div')

buble.ondblclick = () => {
    console.log("mouse double click over buble")
    alert('This kind of works')
}

// onmousemove = function(e){
//     console.log("mouse location:", e.clientX, e.clientY)
// }

buble.onmousedown = function(e){
    console.log("mouse click over buble")
    buble.style.top = e.clientY
    buble.style.left = e.clientX
}

buble.onmouseover = () => {
    console.log("mouse over buble")
    buble.style.background = '#4fc4dc44'
}

buble.onmouseout = () => {
    console.log("mouse out buble")
    buble.style.background = '#ff2d75'
}