//RELACION 2 TEMA 5 DAW DWEC
//Jose Pablo Ferre Leorini

class Serpiente{
    constructor(){
        this.svg = document.getElementsByTagName('svg')[0];
        this.cabeza = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        this.alto=document.createAttribute('height');
        this.ancho=document.createAttribute('width');
        this.posx=document.createAttribute('x');
        this.posy=document.createAttribute('y');
        this.snake = [];
        this.snake.push(this.cabeza);
        this.dibuja();
    }
    
    dibuja(){
        this.posx.value = 300;
        this.posy.value = 300;
        this.alto.value=20;
        this.ancho.value=20;
        this.cabeza.setAttributeNode(this.posx); 
        this.cabeza.setAttributeNode(this.posy);
        this.cabeza.setAttributeNode(this.alto);
        this.cabeza.setAttributeNode(this.ancho);
        this.svg.appendChild(this.cabeza);
    }
    
    mover(direccion){
        var posiciones = this.guardaPosiciones();
        
        if (direccion == 'arriba'){
            this.posy.value = parseInt(this.posy.value) - 20;
        } else if (direccion == 'abajo'){
            this.posy.value = parseInt(this.posy.value) + 20;
        } else if (direccion == 'izq'){
            this.posx.value = parseInt(this.posx.value) - 20;
        } else if (direccion == 'der'){
            this.posx.value = parseInt(this.posx.value) + 20;
        }
        
        if(this.snake.length > 1){
            for(let i=1;i<this.snake.length;i++){
                this.snake[i].posx.value = posiciones[0][i-1];
                this.snake[i].posy.value = posiciones[1][i-1];
            }
        }
    }
    
    guardaPosiciones(){
        var posicionesX = [];
        var posicionesY = [];
        for(let segmento of this.snake){
            if (segmento == this.snake[0]){
                posicionesX.push(segmento.x.animVal.value);
                posicionesY.push(segmento.y.animVal.value);
            }else{
                posicionesX.push(parseInt(segmento.posx.value));
                posicionesY.push(parseInt(segmento.posy.value));
            }
        }
        return [posicionesX, posicionesY];
    }
    
    crecer(){
        let x = parseInt(this.posx.value);
        let y = parseInt(this.posy.value);
        this.snake.push(new Segmento(x, y));
    }
}

class Segmento{
    constructor(x, y){
        this.svg = document.getElementsByTagName('svg')[0];
        this.segment = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        this.alto=document.createAttribute('height');
        this.ancho=document.createAttribute('width');
        this.posx=document.createAttribute('x');
        this.posy=document.createAttribute('y');
        this.dibuja(x, y);
    }
    
    dibuja(x, y){
        this.posx.value = x;
        this.posy.value = y;
        this.alto.value=20;
        this.ancho.value=20;
        this.segment.setAttributeNode(this.posx);
        this.segment.setAttributeNode(this.posy);
        this.segment.setAttributeNode(this.alto);
        this.segment.setAttributeNode(this.ancho);
        this.svg.appendChild(this.segment);
    }
}

class Comida{
    constructor(){
        this.svg = document.getElementsByTagName('svg')[0];
        this.comida=document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        this.posx=document.createAttribute('cx');
        this.posy=document.createAttribute('cy');
        this.rad=document.createAttribute('r');
        this.dibuja();
    }
    
    dibuja(){
        this.posx.value = aleatorioH();
        this.posy.value = aleatorioV();
        this.rad.value = 10;
        this.comida.setAttributeNode(this.posx);
        this.comida.setAttributeNode(this.posy);
        this.comida.setAttributeNode(this.rad);
        this.svg.appendChild(this.comida);
    }
}

function aleatorioV(){
    return Math.floor((Math.random() * 585) + 10);
}

function aleatorioH(){
    return Math.floor((Math.random() * 785) + 10);
}