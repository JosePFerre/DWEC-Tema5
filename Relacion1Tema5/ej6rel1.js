//Jose Pablo Ferre Leorini 2ºDAW DWEC
//Tema 5. Relacion 1.

var imagenes = ["https://media-cdn.tripadvisor.com/media/photo-s/08/fd/97/bb/abdul-doner-kebab.jpg", "http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/42.png","http://www.vertele.com/files/2012/11/Juan-y-Medio-537x300.jpg","http://estaticos.marca.com/imagenes/2015/01/12/futbol/balon-oro/1421089721_extras_noticia_foton_7_0.jpg","https://lastfm-img2.akamaized.net/i/u/300x300/074eddc5049148c08444fe0d78ed28f4.jpg"];

function anterior(){
    var imagen = document.getElementById('imagen').getAttribute('src');
    var pos = imagenes.indexOf(imagen);
    if (pos == 0){
        document.getElementById('imagen').setAttribute('src',imagenes[imagenes.length-1]);
    }else{
    document.getElementById('imagen').setAttribute('src',imagenes[pos-1]);
    }
}

function siguiente(){
    var imagen = document.getElementById('imagen').getAttribute('src');
    var pos = imagenes.indexOf(imagen);
    if (pos == imagenes.length-1){
        document.getElementById('imagen').setAttribute('src',imagenes[0]);
    }else{
    document.getElementById('imagen').setAttribute('src',imagenes[pos+1]);
    }
}