class Juego{
    constructor(){
        this.svg = document.getElementsByTagName('svg')[0];
        esto = this;
        this.snake= new Serpiente();
        this.puntuacion = 0;
    }

    compruebaPared(){
        var altoSVG = this.svg.height.animVal.value;
        var anchoSVG = this.svg.width.animVal.value;
        let x1 = parseInt(this.snake.posx.value);
        let x2 = parseInt(this.snake.posx.value) + 20;
        let y1 = parseInt(this.snake.posy.value);
        let y2 = parseInt(this.snake.posy.value) + 20;
        
        if((x1 < 0) || (x2 > anchoSVG) || (y1 < 0) || (y2 > altoSVG)){
            return true;
        }
    }
    
    compruebaSerpi(){
        var posiciones = this.snake.guardaPosiciones();
        for(let i=1;i<posiciones[0].length;i++){
            if(posiciones[0][0] == posiciones[0][i] && posiciones[1][0] == posiciones[1][i]){
                esto.stop();
            }
        }
    }
    
    compruebaComida(){
        let x1 = parseInt(this.snake.posx.value);
        let x2 = parseInt(this.snake.posx.value) + 20;
        let y1 = parseInt(this.snake.posy.value);
        let y2 = parseInt(this.snake.posy.value) + 20;
        let xC = parseInt(this.comida.posx.value);
        let yC = parseInt(this.comida.posy.value);
        let xC1 = parseInt(this.comida.posx.value) - 10;
        let xC2 = parseInt(this.comida.posx.value) + 10;
        let yC1 = parseInt(this.comida.posy.value) - 10;
        let yC2 = parseInt(this.comida.posy.value) + 10;
        
        if((xC2 >= x1 && xC1 < x1) && (yC > y1 && yC < y2)){
            this.comer();
        } else if((yC1 <= y2 && yC2 > y2) && (xC >= x1 && xC < x2)){
            this.comer();
        } else if((yC1 >= y2 && yC2 < y2) && (xC >= x1 && xC < x2)){
            this.comer();
        } else if((xC2 > x2 && xC1 < x2) && (yC < y2 && yC > y1)){
            this.comer();
        }else if((yC2 > y1 && yC2 < y2) && (xC > x1 && xC < x2)){
            this.comer();
        }
    }
    
    mover(direccion){
        if(!esto.compruebaPared()){
            esto.compruebaSerpi();
            esto.compruebaComida();
            esto.snake.mover(direccion);
        }else{
            esto.stop();
        }
    }
    
    comer(){
        let c = document.getElementsByTagName('circle')[0];
        c.parentNode.removeChild(c);
        this.aumentaPuntuacion();
        this.nuevaComida();
        this.snake.crecer();
    }
    
    nuevaComida(){
        this.comida = new Comida();
    }

    aumentaPuntuacion(){
        this.puntuacion++;
        let puntos = document.getElementById('puntos');
        puntos.innerHTML = 'Puntuación: '+ this.puntuacion;
    }
    
    stop(){
        let mensaje = document.getElementById('perder');
        mensaje.innerHTML += this.puntuacion;
        mensaje.style.display='block';
        let aceptar = document.getElementsByTagName('button')[1];
        aceptar.style.display='block';
        clearInterval(idInt);
        window.onkeydown = function() {};
    }
}

var esto;
function start(){
    document.getElementsByTagName('button')[0].style.display='none';
    var game = new Juego();
    idInt = setInterval(esto.mover,75,'der');
    dir_actual='der';
    game.nuevaComida();
}

function reload(){
    location.reload();
}

window.onkeydown = function(event) {
   if ((event.keyCode == 38 || event.keyCode == 87) && dir_actual != 'abajo') {
        clearInterval(idInt);
        idInt = setInterval(esto.mover,75,'arriba');
        dir_actual='arriba';
   } else if((event.keyCode == 40 || event.keyCode == 83) && dir_actual != 'arriba'){
        clearInterval(idInt);
        idInt = setInterval(esto.mover,75,'abajo');
        dir_actual='abajo';
   } else if((event.keyCode == 37 || event.keyCode == 65) && dir_actual != 'der'){
        clearInterval(idInt);
        idInt = setInterval(esto.mover,75,'izq');
        dir_actual='izq';
   } else if((event.keyCode == 39 || event.keyCode == 68) && dir_actual != 'izq'){
        clearInterval(idInt);
        idInt = setInterval(esto.mover,75,'der');
        dir_actual='der';
   }
}