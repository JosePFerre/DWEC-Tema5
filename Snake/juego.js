class Juego{
    constructor(){
        esto = this;
        this.snake= new Serpiente();
    }
        
    compruebaComida(){
        //alert(this.snake.cabeza)
        //alert(this.comida.posy.value);
        //alert(parseInt(this.comida.posx.value));
        //alert(parseInt(this.comida.posx.value) + 10);
        let x1 = parseInt(this.snake.posx.value);
        let x2 = parseInt(this.snake.posx.value) + 20;
        let y1 = parseInt(this.snake.posy.value);
        let y2 = parseInt(this.snake.posy.value) + 20;
        let xC1 = parseInt(this.comida.posx.value) - 10;
        let xC2 = parseInt(this.comida.posx.value) + 10;
        let yC1 = parseInt(this.comida.posy.value) - 10;
        let yC2 = parseInt(this.comida.posy.value) + 10;
        if((xC1 < x1 && xC2 > x2) && (yC1 < y1 && yC2 > y2)){
            alert('jaja');
        } 
    }
    mover(direccion){
        esto.compruebaComida();
        esto.snake.mover(direccion);
    }
    
    nuevaComida(){
        this.comida = new Comida();
    }
}

var esto;
window.onload = function(){
    var game = new Juego();
    idInt = setInterval(esto.mover,75,'der');
    dir_actual='der';
    game.nuevaComida();
}

window.onkeydown = function(event) {
   if (event.keyCode == 38 && dir_actual != 'abajo') {
        clearInterval(idInt);
        idInt = setInterval(esto.mover,75,'arriba');
        dir_actual='arriba';
   } else if(event.keyCode == 40 && dir_actual != 'arriba'){
        clearInterval(idInt);
        idInt = setInterval(esto.mover,75,'abajo');
        dir_actual='abajo';
   } else if(event.keyCode == 37 && dir_actual != 'der'){
        clearInterval(idInt);
        idInt = setInterval(esto.mover,75,'izq');
        dir_actual='izq';
   } else if(event.keyCode == 39 && dir_actual != 'izq'){
        clearInterval(idInt);
        idInt = setInterval(esto.mover,75,'der');
        dir_actual='der';
   }
}