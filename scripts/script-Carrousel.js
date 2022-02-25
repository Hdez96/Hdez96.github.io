/* 
   Autor: Carlos Rodrigo Hernández Zavala

    */
 const tiempo = 5000;
 let actualImg = 1

 let cambioImagen = (param) => {
     if(param === 'izq' && actualImg === 1){
            actualImg = 4
            document.getElementById('cajaC').style.backgroundImage="url('https://raw.githubusercontent.com/Hdez96/hdez96.github.io/main/img/Carrusel/img" + actualImg + ".JPG')"
        }else if(param === 'der' && actualImg === 5){
            actualImg = 1
            document.getElementById('cajaC').style.backgroundImage="url('https://raw.githubusercontent.com/Hdez96/hdez96.github.io/main/img/Carrusel/img" + actualImg + ".JPG')"
        }else if(param === 'izq' && actualImg != 1){
            actualImg--
            document.getElementById('cajaC').style.backgroundImage="url('https://raw.githubusercontent.com/Hdez96/hdez96.github.io/main/img/Carrusel/img" + actualImg + ".JPG')"
        }else if(param === 'der' && actualImg != 5){
            actualImg++
            document.getElementById('cajaC').style.backgroundImage="url('https://raw.githubusercontent.com/Hdez96/hdez96.github.io/main/img/Carrusel/img" + actualImg + ".JPG')"
        }  
}

let cambioImagenAuto = () => {
    if(actualImg === 1){
           actualImg = 5
           document.getElementById('cajaC').style.backgroundImage="url('https://raw.githubusercontent.com/Hdez96/hdez96.github.io/main/img/Carrusel/img" + actualImg + ".JPG')"
       }else if(actualImg === 5){
           actualImg = 1
           document.getElementById('cajaC').style.backgroundImage="url('https://raw.githubusercontent.com/Hdez96/hdez96.github.io/main/img/Carrusel/img" + actualImg + ".JPG')"
       }else if(actualImg != 1){
           actualImg--
           document.getElementById('cajaC').style.backgroundImage="url('https://raw.githubusercontent.com/Hdez96/hdez96.github.io/main/img/Carrusel/img" + actualImg + ".JPG')"
       }else if(actualImg != 5){
           actualImg++
           document.getElementById('cajaC').style.backgroundImage="url('https://raw.githubusercontent.com/Hdez96/hdez96.github.io/main/img/Carrusel/img" + actualImg + ".JPG')"
       }  
}

setInterval(() => {
    cambioImagenAuto()
}, tiempo)
