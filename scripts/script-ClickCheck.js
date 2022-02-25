/* 
    Autor: Hernández Zavala Carlos Rodrigo
    
    */

const tiempo = 1000
let xSize, ySize, xClick, yClick

let checkPantalla = () => {

    xSize = screen.width
    ySize = screen.height

}

checkPantalla()

let getPosicionMouse = (event) => {
    
    xClick = event.clientX
    yClick = event.clientY

    let checkCuadrante = () => {
        if(xClick < (Math.floor(xSize/2)) && yClick < (Math.floor(ySize/2))){
            document.getElementById("HexText").innerHTML = "Izquierda Arriba"
        }else if(xClick > (Math.floor(xSize/2)) && yClick < (Math.floor(ySize/2))){
            document.getElementById("HexText").innerHTML = "Derecha Arriba"
        }else if(xClick < (Math.floor(xSize/2)) && yClick > (Math.floor(ySize/2))){
            document.getElementById("HexText").innerHTML = "Izquierda Abajo"
        }else if(xClick > (Math.floor(xSize/2)) && yClick > (Math.floor(ySize/2))){
            document.getElementById("HexText").innerHTML = "Derecha Abajo"
        }
    }
    checkCuadrante()

}

document.addEventListener("click", getPosicionMouse)
window.onresize = checkPantalla


