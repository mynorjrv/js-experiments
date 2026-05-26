// If html ids are valid js variable names
// you can directly use them, we dont need
// the document.get_element or whatever
console.log(game)

const BACKGROUND = "#101010"
const FOREGROUND = "#50FF50"

game.width = 800
game.height = 800

// A context enable us to render in
// the canvas
const ctx = game.getContext("2d")
console.log(ctx)


function clear() {
    ctx.fillStyle = BACKGROUND
    ctx.fillRect(0, 0, game.width, game.height)
}

// function point(x, y) {
//     // Paints a "pixel" of size s
//     const s = 20;
//     ctx.fillStyle = FOREGROUND
//     ctx.fillRect(x, y, s, s)
// }

function point({x, y}) {
    // Now I accept an object with
    // fields x and y and instantly
    // destructurizing
    // Paints a "pixel" of size s
    const s = 20;
    ctx.fillStyle = FOREGROUND
    // We are offsetting the pixel by half its size
    // so it is "centered"
    ctx.fillRect(x - s/2, y - s/2, s, s)
}

function screen (p) {
    // p is an object, represents a point
    // but p is in the projection coordinate system
    // -1...1 => 0...2 => 0...1 = 0...w_or_h
    // Now we have a point in html canvas (screen)
    // coordinate system.
    return {
        x: (p.x + 1)/2*game.width,
        // We are essentially doing the same
        // but we want to flip the y axis so
        // positive is upward
        y: (1 - (p.y + 1)/2)*game.height
    }
}


function project({x, y, z}) {
    // This is actually the magic formula
    // We are using geometry to project a
    // 3d point into projection coordinate system
    return {
        x: x/z,
        y: y/z,
    }
}


clear()
// point(100, 100)

// I create a poin, then I convert coordinates,
// then I render it
// point(screen({x: 0, y: 0}))

// Now we have a 3d point, we projected to 2d,
// we convert it to screen coordindates and
// then we render it
// point(screen(project({x: 0, y: 0, z:0})))
// In this case we dont see anything xd because
// z = 0 causing a division by 0 xd
// z represents the distance from the viewer to
// the 3d point sooooo its like having the point 
// inside the eye which is strange.
// z should be larger than the distance to the screen
// (which i actually dont know how we determine)
point(screen(project({x: 0, y: 0, z: 1})))