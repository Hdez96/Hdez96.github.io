/* 
   Autor: Carlos Rodrigo Hernández Zavala

    */

let carrousel = () => {

    for (i = 1; i < 4; i++){
        let divImagen = document.createElement('div')
        divImagen.id = 'imgDiv' + i
        divImagen.innerHTML = '<img src="img/img'+i+'.jpg" alt="" width="400" height="600">'
        console.log(divImagen.innerHTML)
        document.getElementById("mainDiv").appendChild(divImagen)
    }

}
