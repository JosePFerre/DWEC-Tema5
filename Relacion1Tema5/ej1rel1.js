//Jose Pablo Ferre Leorini 2ºDAW DWEC
//Tema 5. Relacion 1.

function cuentaEnlaces(){
    var numEnlaces = document.getElementsByTagName('a').length;
    
    document.getElementById('resultados').innerHTML += 'El numero de enlaces de la página es: ' + numEnlaces + '<br>';
}

function muestraPenultimo(){
    var enlaces = document.getElementsByTagName('a');
     document.getElementById('resultados').innerHTML += ('El penúltimo enlace de la página es: '+enlaces[document.getElementsByTagName('a').length - 2])+'<br>';
}

function buscaEnlace(){
    var enlaceGoogle = document.querySelectorAll("a[href='http://google.es']").length;
    document.getElementById('resultados').innerHTML += 'El numero de enlaces de la página a Google es: ' + enlaceGoogle + '<br>';
}

function enlacesTercerP(){
    var parrafo = document.getElementsByTagName('p')[2];
    var x = parrafo.getElementsByTagName('a').length;
    document.getElementById('resultados').innerHTML += 'El numero de enlaces en el tercer párrafo es: ' + x + '<br>';
}

window.onload = function(){
    cuentaEnlaces();
    muestraPenultimo();
    buscaEnlace();
    enlacesTercerP();
}