class Juego{
    constructor(){
        esto = this;
        this.snake= new Serpiente();
    }
//this.svg.width.animVal.value para pillar la anchura y altura height de la caja
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
        esto.compruebaComida();
        esto.snake.mover(direccion);
    }
    
    comer(){
        let c = document.getElementsByTagName('circle')[0];
        c.parentNode.removeChild(c);
        this.nuevaComida();
        this.snake.crecer();
    }
    
    nuevaComida(){
        this.comida = new Comida();
    }
}

var esto;
window.onload = function(){
    var game = new Juego();
    idInt = setInterval(esto.mover,50,'der');
    dir_actual='der';
    game.nuevaComida();
}

window.onkeydown = function(event) {
   if (event.keyCode == 38 && dir_actual != 'abajo') {
        clearInterval(idInt);
        idInt = setInterval(esto.mover,50,'arriba');
        dir_actual='arriba';
   } else if(event.keyCode == 40 && dir_actual != 'arriba'){
        clearInterval(idInt);
        idInt = setInterval(esto.mover,50,'abajo');
        dir_actual='abajo';
   } else if(event.keyCode == 37 && dir_actual != 'der'){
        clearInterval(idInt);
        idInt = setInterval(esto.mover,50,'izq');
        dir_actual='izq';
   } else if(event.keyCode == 39 && dir_actual != 'izq'){
        clearInterval(idInt);
        idInt = setInterval(esto.mover,50,'der');
        dir_actual='der';
   }
}