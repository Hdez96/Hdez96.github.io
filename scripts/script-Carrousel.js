/* 
   Autor: Carlos Rodrigo Hernández Zavala

    */
 const tiempo = 5000;
 let actualImg = 1

 let cambioImagen = (param) => {
     if(param === 'izq' && actualImg === 1){
            actualImg = 4
            document.getElementById('cajaC').style.backgroundImage="url('../img/Carrusel/img" + actualImg + ".jpg')"
        }else if(param === 'der' && actualImg === 5){
            actualImg = 1
            document.getElementById('cajaC').style.backgroundImage="url('../img/Carrusel/img" + actualImg + ".jpg')"
        }else if(param === 'izq' && actualImg != 1){
            actualImg--
            document.getElementById('cajaC').style.backgroundImage="url('../img/Carrusel/img" + actualImg + ".jpg')"
        }else if(param === 'der' && actualImg != 5){
            actualImg++
            document.getElementById('cajaC').style.backgroundImage="url('../img/Carrusel/img" + actualImg + ".jpg')"
        }  
}

let cambioImagenAuto = () => {
    if(actualImg === 1){
           actualImg = 5
           document.getElementById('cajaC').style.backgroundImage="url('../img/Carrusel/img" + actualImg + ".jpg')"
       }else if(actualImg === 5){
           actualImg = 1
           document.getElementById('cajaC').style.backgroundImage="url('../img/Carrusel/img" + actualImg + ".jpg')"
       }else if(actualImg != 1){
           actualImg--
           document.getElementById('cajaC').style.backgroundImage="url('../img/Carrusel/img" + actualImg + ".jpg')"
       }else if(actualImg != 5){
           actualImg++
           document.getElementById('cajaC').style.backgroundImage="url('../img/Carrusel/img" + actualImg + ".jpg')"
       }  
}

setInterval(() => {
    cambioImagenAuto()
}, tiempo)
