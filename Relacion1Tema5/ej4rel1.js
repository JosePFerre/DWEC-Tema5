//Jose Pablo Ferre Leorini 2ºDAW DWEC
//Tema 5. Relacion 1.

var x = 5;
function insertaObjeto(){
    var lista = document.getElementById('listacompra');
    var objeto = document.createElement('li');
    objeto.appendChild(document.createTextNode('Objeto ' + x));
    lista.appendChild(objeto);
    x++;
}