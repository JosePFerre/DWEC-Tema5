//Jose Pablo Ferre Leorini 2ºDAW DWEC
//Tema 5. Relacion 1.

var x = 1;
function generaInput(){
    var formulario = document.getElementById('adjuntos');
    br = document.createElement('br');
    formulario.appendChild(br);
    var nuevoAdjunto = document.createElement('input');
    var tipo = document.createAttribute('type'); 
    tipo.value = 'file';
    nuevoAdjunto.setAttributeNode(tipo);
    var nombre = document.createAttribute('name'); 
    nombre.value = 'fichero' + x;
    nuevoAdjunto.setAttributeNode(nombre);
    x++;
    var evento = document.createAttribute('onclick');
    evento.value = 'generaInput()';
    nuevoAdjunto.setAttributeNode(evento);
    formulario.appendChild(nuevoAdjunto);
    
    var enviar = document.createElement('button');
    var tipoB = document.createAttribute('type'); 
    tipoB.value = 'button';
    enviar.setAttributeNode(tipoB);
    var eventoB = document.createAttribute('onclick');
    eventoB.value = 'alert("Archivo enviado")';
    enviar.setAttributeNode(eventoB);
    enviar.appendChild(document.createTextNode('Enviar'));
    formulario.appendChild(enviar);
}