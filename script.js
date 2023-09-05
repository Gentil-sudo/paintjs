const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const inputColor = document.querySelector(".input-color")
const tools = document.querySelectorAll(".button-tool")
const size = document.querySelectorAll(".button-size")
const clear = document.querySelectorAll(".button-clear")


let brushsize = 50

let ItsPainting = false

ctx.fillStyle = "#000"

inputColor.addEventListener("change" ({target}) => {
    
    
})

canvas.addEventListener("mousedown", ({clientX, clientY}) => {
    draw(clientX, clientY)
    ItsPainting = true
})

canvas.addEventListener("mousemove", ({clientX, clientY}) => {
        if (ItsPainting){
            draw(clientX, clientY)
        }
})

canvas.addEventListener("mouseup", ({clientX, clientY}) => {
    draw(clientX, clientY)
    ItsPainting = false
})

const draw = (x,y) => {
    
    ctx.beginPath()
    ctx.arc(x - canvas.offsetLeft, y - canvas.offsetTop, brushsize / 2, 0 , 2 * Math.PI)
    ctx.fill()


}
