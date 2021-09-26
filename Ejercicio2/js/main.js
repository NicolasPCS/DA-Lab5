let contador = 0;

function agregarNodoTexto() {
    let nuevoNodo;
    let lista;

    nuevoNodo = document.createTextNode('Texto 1 ');
    lista = document.getElementById('opcion1');
    lista.style.color = "#" + generarColor();
    lista.appendChild(nuevoNodo);
    nuevoNodo = document.createTextNode('Texto 2 ');
    lista = document.getElementById('opcion2');
    lista.style.color = "#" + generarColor();
    lista.appendChild(nuevoNodo);
    nuevoNodo = document.createTextNode('Texto 3 ');
    lista = document.getElementById('opcion3');
    lista.style.color = "#" + generarColor();
    lista.appendChild(nuevoNodo);

    contador += 1;
}

function generarColor() {
    // CREAMOS UN NÚMERO ENTERO Y POSITIVO AL AZAR MENOR A 16777216
    var colorAzar = Math.floor(Math.random() * 16777216); 
    // CONVERTIMOS EL NÚMERO A BASE 16
    colorHexa = colorAzar.toString(16); 
    // CANTIDAD DE CARACTERES EN LA CADENA CON EL NÚMERO HEXADECIMAL
    largoHexa = colorHexa.length; 
    colorHexa6c = (largoHexa<6)? ( "000000".substring(0,6-largoHexa) + colorHexa ) : colorHexa;
    return colorHexa6c;
}

function eliminarNodoTexto() {
    // alert(contador);

    for (let i = 0; i < contador-1; i++) {
        agregarNodoTexto();
    }
}