//RELACION 4 TEMA 5 DAW DWEC
//Jose Pablo Ferre Leorini

/*Crea una página en la que representarás 2 gráficas diferentes haciendo uso de Google Charts sobre los siguientes conjuntos de datos:
1)Representación en el Congreso de los Diputados por partidos en las últimas elecciones generales. Estos datos los deberás representar mediante un gráfico de barras y mediante uno de sectores (PieChart).*/

google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(dibujaGraficoBarrasElecciones);

function dibujaGraficoBarrasElecciones() {
    var datos = google.visualization.arrayToDataTable([
        ['Partidos', 'Escaños',{ role: 'style' }],
        ['Partido Popular', 137, 'color:#0BB2FF'],
        ['PSOE', 85, 'color:#ED0A01'],
        ['Podemos', 71, 'color:#9A559A'],
        ['Ciudadanos', 32, 'color:#FCA136'],
        ['ERC-CATSI', 9, 'color:#01C6A4'],
        ['CDC', 8, 'color:#B9BF01'],
        ['PNV', 5, 'color:#7EC2D6'],
        ['EH Bildu', 2, 'color:#61AABE'],
        ['CCA-PNC', 1, 'color:#F0497E']
        ]);
    
    /*OTRA FORMA DE HACERLO
    var datos = new google.visualization.DataTable();
    datos.addColumn('string', 'Partido');
    datos.addColumn('number', 'Escaños');
    datos.addRows([
        ['Partido Popular', 137],
        ['PSOE', 85],
        ['Podemos', 71],
        ['Ciudadanos', 32],
        ['ERC-CATSI', 9],
        ['CDC', 8],
        ['PNV', 5],
        ['EH Bildu', 2],
        ['CCA-PNC', 1]
    ]);*/
    
    var opciones = {
        'title':'Resultados elecciones generales 2016',
        'width':700,
        'height':400,
        animation: {startup: true,
                   duration: 1500
                   }
    };
    var graficoBarras = new google.visualization.BarChart(document.getElementById('contenedor1'));
        graficoBarras.draw(datos, opciones);
    
    //Realiza una animación sobre uno de los gráficos del punto 1.1. Para ello suponemos que pasados 10 segundos cambian los datos y debe animarse automáticamente.
    window.setTimeout(modificaGrafico, 10000, graficoBarras, datos, opciones);
}

function modificaGrafico(grafico, datos, opciones){
    for(i=0;i<9;i++){
        let v = datos.getValue(i, 1) + Math.floor((Math.random() * 50) + 1);
        datos.setValue(i, 1, v);
    }
    grafico.draw(datos, opciones);
}

//Gráfico de sectores
google.charts.setOnLoadCallback(dibujaGraficoTartaElecciones);

function dibujaGraficoTartaElecciones() {
    var datos = google.visualization.arrayToDataTable([
        ['Partidos', 'Escaños'],
        ['Partido Popular', 137],
        ['PSOE', 85],
        ['Podemos', 71],
        ['Ciudadanos', 32],
        ['ERC-CATSI', 9],
        ['CDC', 8],
        ['PNV', 5],
        ['EH Bildu', 2],
        ['CCA-PNC', 1]
        ]);
    
    var opciones = {
        'title':'Resultados elecciones generales 2016',
        'width':700,
        'height':400,
        colors:['#0BB2FF','#ED0A01','#9A559A','#FCA136','#01C6A4','#B9BF01','#7EC2D6','#61AABE','#F0497E']
    };
    
    var graficoTarta = new google.visualization.PieChart(document.getElementById('contenedor2'));
        graficoTarta.draw(datos, opciones);
}

/*Ejercicio 2. Ránking mundial de países más turísticos (por número de visitantes). Deberás representar estos datos mediante un gráfico Geográfico.*/

google.charts.setOnLoadCallback(dibujaGraficoPaises);

function dibujaGraficoPaises(){
    
    var datos = google.visualization.arrayToDataTable([
        ['País', 'Millones de visitantes al año'],
        ['France', 84.7],
        ['United States', 69.8],
        ['Spain', 60.7],
        ['China', 55.7],
        ['Italy', 47.7],
        ['Turkey', 37.8],
        ['Germany', 31.5],
        ['UK', 31.2],
        ['Russia', 28.4],
        ['Thailand', 26.5],
    ]);
    
    var options = {region: 'world',
                    'width':1000,
                    'height':500};
    
    var graficoPaises = new google.visualization.GeoChart(document.getElementById('contenedor3'));

    graficoPaises.draw(datos, options);
}