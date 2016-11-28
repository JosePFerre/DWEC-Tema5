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
        this.snake = [this.cabeza];
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
        if (direccion == 'arriba'){
            this.posy.value = parseInt(this.posy.value) - 20;
        } else if (direccion == 'abajo'){
            this.posy.value = parseInt(this.posy.value) + 20;
        } else if (direccion == 'izq'){
            this.posx.value = parseInt(this.posx.value) - 20;
        } else if (direccion == 'der'){
            this.posx.value = parseInt(this.posx.value) + 20;
        }
    }
    
}

class Comida{
    constructor(){
        this.svg = document.getElementsByTagName('svg')[0];
        this.comida=document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        this.posx=document.createAttribute('cx');
        this.posy=document.createAttribute('cy');
        this.rad=document.createAttribute('r');
        this.stroke=document.createAttribute('stroke');
        this.strW=document.createAttribute('stroke-width')
        this.relleno=document.createAttribute('fill');
        this.dibuja();
    }
    
    dibuja(){
        this.posx.value = aleatorioH();
        this.posy.value = aleatorioV();
        this.rad.value = 10;
        this.stroke.value='black';
        this.strW.value=3;
        this.relleno.value='red';
        this.comida.setAttributeNode(this.posx);
        this.comida.setAttributeNode(this.posy);
        this.comida.setAttributeNode(this.rad);
        this.comida.setAttributeNode(this.stroke);
        this.comida.setAttributeNode(this.strW);
        this.comida.setAttributeNode(this.relleno);
        this.svg.appendChild(this.comida);
    }
}

function aleatorioV(){
    return Math.floor((Math.random() * 590) + 1);
}

function aleatorioH(){
    return Math.floor((Math.random() * 1195) + 1);
}