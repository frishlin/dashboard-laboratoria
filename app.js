function setGenerations(valor)
{
  //Selecciona el valor del elemento seleccionado
  var selectedIndex = document.getElementById('select-sede').selectedIndex;
  //Elemento que corresponde a la opción seleccionada
  var option = document.getElementById('select-sede')[selectedIndex];
  //console.log(option);
  //Apunta al nombre de la SEDE seleccionada
  var sede = option.dataset.sede;
  var activeStudents = 0;//Variable que almacena a las estudiantes activas (true)
  var desertionStudentsRate = 0; // Variable para guardar el porcentaje de deserción
  var desertedStudents = 0; // Variable para guardar el número de estudiantes que desertaron
  var generation = option.dataset.generation;//Apunta al nombre de la GENERACIÓN seleccionada
  var sprintScoreTech = 0;//Variable que almacena la sumatoria de los punto Tech de cada sprint
  var sprintScoreHSE = 0;//Variable que almacena la sumatoria de los punto HSE de cada sprint
  var goal70Percent = (1800+1200)/2*.7; // 70% del promedio de Sprints Tech & HSE
  var goal70PercentTech = 1800*.7; // 70% del promedio de Sprints Tech
  var goal70PercentHSE = 1200*.7; // 70% del promedio de Sprints HSE
  var averageSprints = 0; // Promedio de puntos por Sprints por estudiante
  var studentsOverAverage = 0; // Estudiantes que superan el promedio del 70% por Sprint
  var studentsOverAverageRate = 0; //% Estudiantes que superan el promedio del 70% por Sprint
  var totalStudents = 0;//Total de estudiantes por sede (true + false)
  var totalPromotors = 0; //Almacena suma total de los puntos de promotores por generación
  var totalDetractors = 0;//Almacena suma total de los puntos de detractores por generación
  var numSprints = 0; //Almacena el número de sprints por generación
  var nps = 0; //Almacena el promedio para NPS
  var totalScoreTech = 0; //Almacena número de estudiantes que superan la meta tech
  var totalScoreHSE = 0; //Almacena número de estudiantes que superan la meta HSE
  var averageSprintsTech = 0; //Almacena promedio tec >= 70%
  var averageSprintsHSE = 0; //Almacena promedio hse >= 70%
  var studentsOverAverageTech = 0; //Almacena total de estudiantes que superan el 70% tech
  var studentsOverAverageHSE = 0; //Almacena total de estudiantes que superan el 70% hse
  var scoreRateTech = 0; //Almacena el % de estudiantes que superan la meta tech
  var scoreRateHSE = 0; //Almacena el % de estudiantes que superan la meta HSE
  var studentsOverAverageTechPerSprint = 0; //acumular número de estudiantes por sprint de la clasificación Tech
  var studentsOverAverageHSEPerSprint = 0; //acumular número de estudiantes por sprint de la clasificación hse
  var totalCumple = 0; //Alumnas satisfechas
  var totalSupera = 0; //Alumnas más satisfechas
  var averageSatisfaction = 0; //Total de satisfacción
  var totalTeacher = 0; //Almacena la sumatoria de los Teacher
  var totalJedi = 0; //Almacena la sumatoria de los Jedi
  var averageTeacher = 0; //Almacena promedio Teacher
  var averageJedi = 0; //Almacena promedio Jedi
  var studentsOverAverageTechHSE = 0; //PASARON 70% SPRINT PROMEDIO
  var studentsOverAverageTechRate = 0; //Porcentaje superan 70% Tech
  var studentsOverAverageHSERate =0;//Porcentaje superan 70% hse
  var studentsNotOverAverageTechHSE = 0; //Muestra el porcentaje de las estudiantes que no superaron la meta en Tech y HSE
  var totalPassives = 0; //Almacenta total de puntos Passive
  var studentsNotOverAverageTech = 0; //Almacena número de estudiantes que no superaron la meta Tech
  var studentsNotOverAverageHSE = 0; //Almacena número de estudiantes que no superaron la meta Tech
  var totalNoCumple = 0; //Porcentaje de alumnas insatisfechas con la experiencia Laboratoria
  var dataPerTeacher = new Array(); // Arreglo para guardar el puntaje individual por cada Teacher
  var dataPerJedi = new Array(); // Arreglo para guardar el puntaje individual por cada Teacher
  //Recorrer a las estudiantes de la data y encontrar a todas las active == true
  for(var i=0; i<data[sede][generation]['students'].length; i++){
    if(data[sede][generation]['students'][i].active == true ){
      activeStudents++;
    }
    else{
      desertedStudents++;
    }
  }
//El total de estudiantes presentes por sede y generación.--1
  totalStudents = activeStudents + desertedStudents;
//El porcentaje de deserción de estudiantes.--
  //Calculando porcentaje de deserción --2
  desertionStudentsRate = desertedStudents/(desertedStudents+activeStudents)*100;//--2
    //Calculando % y # de estudiantes que superan la meta tech & hse
    for(var i=0; i<data[sede][generation]['students'].length; i++){
      for(var j=0; j<data[sede][generation]['students'][i]['sprints'].length; j++){
        totalScoreTech+=data[sede][generation]['students'][i]['sprints'][j].score.tech;
        // console.log('scoreTech: ' + totalScoreTech);
        totalScoreHSE+=data[sede][generation]['students'][i]['sprints'][j].score.hse;
        // console.log('totalScoreTech' + totalScoreTech);
        if(data[sede][generation]['students'][i]['sprints'][j].score.tech>=goal70PercentTech){
        //acumular número de estudiantes por sprint de la clasificación Tech
          studentsOverAverageTechPerSprint++;
        }
        //  console.log('j' + j);
        if(data[sede][generation]['students'][i]['sprints'][j].score.hse>=goal70PercentHSE){
        //acumular número de Estudiantes por sprint de la clasificación HSE
          studentsOverAverageHSEPerSprint++;
        }
      }

      averageSprintsTech = totalScoreTech/data[sede][generation]['students'][i]['sprints'].length;
      averageSprintsHSE = totalScoreHSE/data[sede][generation]['students'][i]['sprints'].length;
      numSprints = data[sede][generation]['students'][i]['sprints'].length;
  //    quesaleTec = totalScoreTech;
    //  quesaleHSE = totalScoreHSE;
      //console.log('SPRINT #: ' +numSprints + 'TECH /4: ' + averageSprintsTech);

//revisar para HSE
//console.log('SPRINT #: ' +numSprint + 'TECH /4: ' + averageSprintsTech + 'HSE/4: ' + averageSprintsHS);


      //++++++++++++++++++++++++++DIAGRAMA PROMEDIOS 70% TECH y HSE++++++++++++++++++++++++++++++++++++++//
      google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Nombre', '%'],
              ['Tech', averageSprintsTech],
              ['HSE', averageSprintsHSE]
            ]);
            var options = {
              title: 'Estudiantes que superan la meta de puntos en promedio',
              backgroundColor: 'transparent',
              is3D: true
            };
            var chart = new google.visualization.PieChart(document.getElementById('graphic2'));
            chart.draw(data, options);
      }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


      if(averageSprintsTech>=goal70PercentTech && averageSprintsHSE>=goal70PercentHSE){
/*La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados.
La meta de puntos es 70% del total de puntos en HSE y en tech.*/
        studentsOverAverageTechHSE++; //---3
      }
      else{
        studentsNotOverAverageTechHSE++;
      }

      //++++++++++++++++++++++++++DIAGRAMA PROMEDIOS TECH 70%++++++++++++++++++++++++++++++++++++++//
      //Gráfica punto 6
      google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(dibujarGrafico2);

         function dibujarGrafico2() {
           // Tabla de datos: valores y etiquetas de la gráfica
           var data = google.visualization.arrayToDataTable([
             ['Estudiantes', 'Tec'],
             ['Llegaron Meta', totalPromotors/numSprints],
             ['No llegaron Meta', totalPassives/numSprints],
           ]);
           var options = {
             title: 'Promedio de los Sprints Cursados',
             backgroundColor: 'transparent',
           }
           // Dibujar el gráfico
           new google.visualization.ColumnChart(
           //ColumnChart sería el tipo de gráfico a dibujar
             document.getElementById('graphic5_bar')
           ).draw(data, options);
         }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////7
      totalScoreTech = 0;
      totalScoreHSE = 0;
    }
//El porcentaje que representa el dato anterior en relación al total de estudiantes.
    studentsOverAverageRate = studentsOverAverageTechHSE/totalStudents*100; //---4 el bueno
    studentsNotOverAverageTechHSE = studentsNotOverAverageTechHSE/totalStudents*100;
    //console.log('TEC con I: ' + studentsOverAverageHSEPerSprint);
    //console.log('tech % tech: ' + studentsNotOverAverageTechHSE);

/*
El Net Promoter Score (NPS) promedio de los sprints cursados.
El NPS se calcula en base a la encuesta que las estudiantes responden al respecto de la recomendación
que darían de Laboratoria, bajo la siguiente fórmula:
*/
//Calculando el NPS--5
  for(var i = 0; i < data[sede][generation]['ratings'].length; i++){
    totalPromotors += data[sede][generation]['ratings'][i].nps.promoters;
    totalDetractors += data[sede][generation]['ratings'][i].nps.detractors;
    totalPassives += data[sede][generation]['ratings'][i].nps.passive;
  }
  //console.log('totalPromotors: ' + totalPromotors/4 + 'total Detractors: ' + totalDetractors/4 + 'total Passive: ' + totalPassives/4);
  numSprints = data[sede][generation]['ratings'].length;
  nps = (totalPromotors - totalDetractors)/numSprints; //--5

//Calculando # y % de alumnas que superan el 70% Tech y HSE
for(var i=0; i<data[sede][generation]['students'].length; i++){
    for(var j=0; j<data[sede][generation]['students'][i]['sprints'].length; j++){
      totalScoreTech+=data[sede][generation]['students'][i]['sprints'][j].score.tech;
      totalScoreHSE+=data[sede][generation]['students'][i]['sprints'][j].score.hse;

      if(data[sede][generation]['students'][i]['sprints'][j].score.tech>=goal70PercentTech){
        //acumular número de estudiantes por sprint de la clasificación Tech
        studentsOverAverageTechPerSprint++;
      }

      if(data[sede][generation]['students'][i]['sprints'][j].score.hse>=goal70PercentHSE){
        //acumular número de Estudiantes por sprint de la clasificación HSE
        studentsOverAverageHSEPerSprint++;
      }

    }

    averageSprintsTech = totalScoreTech/data[sede][generation]['students'][i]['sprints'].length;
    averageSprintsHSE = totalScoreHSE/data[sede][generation]['students'][i]['sprints'].length;

    if(averageSprintsTech>=goal70PercentTech){
/*La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos
técnicos en promedio y por sprint.*/
      studentsOverAverageTech++;
    }
    else{
      studentsNotOverAverageTech++;
    }
    if(averageSprintsHSE>=goal70PercentHSE){

/*La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos
de HSE en promedio y por sprint.*/
      studentsOverAverageHSE++;
    }
    else{
      studentsNotOverAverageHSE++;
    }
    //++++++++++++++++++++++++++DIAGRAMA PROMEDIOS TECH 70%++++++++++++++++++++++++++++++++++++++//
    //Gráfica punto 6
    google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(dibujarGrafico3);

       function dibujarGrafico3() {
         // Tabla de datos: valores y etiquetas de la gráfica
         var data = google.visualization.arrayToDataTable([
           ['Estudiantes', 'Tec'],
           ['Meta', studentsOverAverageTech],
           ['No Meta', studentsNotOverAverageTech],
         ]);
         var options = {
           title: 'Estudiantes que superan la Meta en promedio de Tech',
           backgroundColor: 'transparent',
         }
         // Dibujar el gráfico
         new google.visualization.ColumnChart(
         //ColumnChart sería el tipo de gráfico a dibujar
           document.getElementById('graphic5_bar')
         ).draw(data, options);
       }

       //++++++++++++++++++++++++++DIAGRAMA PROMEDIOS HSE 70%++++++++++++++++++++++++++++++++++++++//
       //Gráfica punto 6
       google.charts.load('current', {'packages':['corechart']});
             google.charts.setOnLoadCallback(dibujarGrafico3);

          function dibujarGrafico3() {
            // Tabla de datos: valores y etiquetas de la gráfica
            var data = google.visualization.arrayToDataTable([
              ['Estudiantes', 'HSE'],
              ['Meta', studentsOverAverageHSE],
              ['No Meta', studentsNotOverAverageHSE],
            ]);
            var options = {
              title: 'Estudiantes que superan la Meta en promedio de HSE',
              backgroundColor: 'transparent',
            }
            // Dibujar el gráfico
            new google.visualization.ColumnChart(
            //ColumnChart sería el tipo de gráfico a dibujar
              document.getElementById('graphic6_bar')
            ).draw(data, options);
          }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////7



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log('Tec meta: ' + studentsOverAverageTech);
// console.log('tec no meta: ' +studentsNotOverAverageTech);
    totalScoreTech = 0;
    totalScoreHSE = 0;
  }
    studentsOverAverageTechRate = studentsOverAverageTech/totalStudents*100;
    studentsOverAverageHSERate = studentsOverAverageHSE/totalStudents*100;

  //Calcular Porcentaje de estudiantes satisfechas con la experiencia Laboratoria
  for(var i = 0; i < data[sede][generation]['ratings'].length; i++){
    totalCumple += data[sede][generation]['ratings'][i].student.cumple;
    totalSupera += data[sede][generation]['ratings'][i].student.supera;
    totalNoCumple +=data[sede][generation]['ratings'][i].student.noCumple;
  }
  numSprints = data[sede][generation]['ratings'].length;
  averageSatisfaction = (totalCumple + totalSupera)/numSprints; //--8

    //La puntuación promedio de l@s profesores.

    for(var i = 0; i < data[sede][generation]['ratings'].length; i++){
      totalTeacher += data[sede][generation]['ratings'][i].teacher;
      dataPerTeacher[i] = data[sede][generation]['ratings'][i].teacher; // Se recolecta el dato del Teacher y se almacena en el arreglo
      dataPerTeacher = dataPerTeacher;
    }
    // Para mostrar los datos individuales de los Teachers, se precisa de un for que muestre todos los datos
    // del arreglo que contiene dicha información

  // console.log(puntosTeacher[i]);
  // for(var i = 0; i < data[sede][generation]['ratings'].length; i++){
  //   totalTeacher += data[sede][generation]['ratings'][i].teacher;
  // }
  numSprints = data[sede][generation]['ratings'].length;
  averageTeacher = totalTeacher/numSprints; //--9

  //La puntuación promedio de l@s jedi masters
  for(var i = 0; i < data[sede][generation]['ratings'].length; i++){
    totalJedi += data[sede][generation]['ratings'][i].jedi;
  }
  numSprints = data[sede][generation]['ratings'].length;
  averageJedi = totalJedi/numSprints; //--10

  //------Muestra en consola, todos los resultados que se piden en el ejercico------\\

  console.log(
              'Activas: ' + activeStudents + //1
              '\nPorcentaje de deserción: ' + desertionStudentsRate.toFixed(2) + '% ' + //2
              '\nEstudiantes sobre el 70% del total de puntos en HSE y Tech: ' +
              studentsOverAverageTechHSE + //3
              '\nPorcentaje de estudiantes que superan el 70% del total de puntos en HSE y Tech: ' +
              studentsOverAverageRate.toFixed(2) + '% ' + //4
              '\nNPS = ' + nps.toFixed(2) + //5
              '\nNúmero estudiantes superan 70% de Tech: ' +
              studentsOverAverageTech + ' Porcentaje: ' + //6
              studentsOverAverageTechRate.toFixed(2) + '%' + //6
              '\nNúmero estudiantes superan 70% de HSE: '+ studentsOverAverageHSE + //7
              ' Porcentaje: ' + studentsOverAverageHSERate.toFixed(2) + '% ' + //7
              '\nAlumnas Satisfechas: ' + averageSatisfaction.toFixed(2) + '% ' + //8
              '\nPuntos Teacher: ' + averageTeacher.toFixed(2) + //9
              '\nPuntos Jedi: ' + averageJedi.toFixed(2)); //10

              for(var i=0; i<dataPerTeacher.length; i++){
                console.log("\nPuntos Teacher "+(i+1)+":"+dataPerTeacher[i]);
              }
//+++++++++++++++++++++++++++++++ DATOS PUNTOS 1 Y 2++++++++++++++++++++++++++++++++++//
//TRAER DE HTML A JS
var contenedorGraficas = document.getElementById('contenedor-graficas'); //amarillo
contenedorGraficas.innerHTML = ' ';
//CREAR LOS ELEMENTOS A NECESITAR
var divContGrafGral = document.createElement('DIV'); //negro
//Contenedor de Gráfica y texto
var divGraf1 = document.createElement('DIV');
var divGraf2 = document.createElement('DIV');
var divGraf3 = document.createElement('DIV');
var divGraf4 = document.createElement('DIV');
var divGraf5 = document.createElement('DIV');
var divGraf6 = document.createElement('DIV');
var divGraf7 = document.createElement('DIV');
var divGraf8 = document.createElement('DIV');
// var divGraf9 = document.createElement('DIV');
// var divGraf10 = document.createElement('DIV');
//contenedor de gráfica
var divGrafica1 = document.createElement('DIV');
var divGrafica2 = document.createElement('DIV');
var divGrafica3 = document.createElement('DIV');
var divGrafica4 = document.createElement('DIV');
var divGrafica5 = document.createElement('DIV');
var divGrafica6 = document.createElement('DIV');
var divGrafica7 = document.createElement('DIV');
var divGrafica8 = document.createElement('DIV');
// var divGrafica9 = document.createElement('DIV');
// var divGrafica10 = document.createElement('DIV');
//Contenedor de texto
var divDato1 = document.createElement('DIV');
var divDato2 = document.createElement('DIV');
var divDato3 = document.createElement('DIV');
var divDato4 = document.createElement('DIV');
var divDato5 = document.createElement('DIV');
var divDato6 = document.createElement('DIV');
var divDato7 = document.createElement('DIV');
var divDato8 = document.createElement('DIV');
// var divDato9 = document.createElement('DIV');
// var divDato10 = document.createElement('DIV');
//DAR ATRIBUTOS A ELEMENTOS CREADOS
  divContGrafGral.className = 'contGrafGral-class';
  //hijos de divContGrafGral - Contenedor de Gráfica y texto
  divGraf1.className = 'divGraf-class';
  divGraf1.id = 'divGraf1-id';
  divGraf2.className = 'divGraf-class';
  divGraf2.id = 'divGraf2-id';
  divGraf3.className = 'divGraf-class';
  divGraf3.id = 'divGraf3-id';
  divGraf4.className = 'divGraf-class';
  divGraf4.id = 'divGraf4-id';
  divGraf5.className = 'divGraf-class';
  divGraf5.id = 'divGraf5-id';
  divGraf6.className = 'divGraf-class';
  divGraf6.id = 'divGraf6-id';
  divGraf7.className = 'divGraf-class';
  divGraf7.id = 'divGraf7-id';
  divGraf8.className = 'divGraf-class';
  divGraf8.id = 'divGraf8-id';
  // divGraf9.className = 'divGraf-class';
  // divGraf9.id = 'divGraf9-id';
  // divGraf10.className = 'divGraf-class';

  //hijos de divGraf# que cotendrán las gráficas
  divGrafica1.className = 'divGrafica-class';
  divGrafica1.id = 'graphic1_3d';
  divGrafica2.className = 'divGrafica-class';
  divGrafica2.id = 'graphic2';
  divGrafica3.className = 'divGrafica-class';
  divGrafica3.id = 'graphic3_3d';
  divGrafica4.className = 'divGrafica-class';
  divGrafica4.id = 'graphic4_bar';
  divGrafica5.className = 'divGrafica-class';
  divGrafica5.id = 'graphic5_bar';
  divGrafica6.className = 'divGrafica-class';
  divGrafica6.id = 'graphic6_bar';
  divGrafica7.className = 'divGrafica-class';
  divGrafica7.id = 'graphic7_bar';
  divGrafica8.className = 'divGrafica-class';
  divGrafica8.id = 'graphic8_bar';
  // divGrafica9.className = 'divGrafica-class';
  // divGrafica9.id = 'graphic9_3d';
  //divGrafica10.className = 'divGrafica-class';

  divDato1.innerText = 'Alumnas Activas: ' + activeStudents + '\nDeserción: ' + desertionStudentsRate.toFixed(2) + '%'; //'DATO_ALUMNAS_PRESENTES Y DESERCIÓN'
  divDato1.style.color = '#2b2b2b';
  divDato1.className = 'dato-class';

  divDato2.innerText = 'Estudiantes con Meta HSE y Tech: ' + studentsOverAverageTechHSE;  //'PROMEDIO DE ESTUDIANTES QUE ALCANZARON EL 70% DEL TOTAL DE PUNTOS EN HSE Y TECH'
  divDato2.style.color = '#2b2b2b';
  divDato2.className = 'dato-class';

  divDato3.innerText = 'Porcentaje con Meta HSE y Tech: ' + studentsOverAverageRate.toFixed(2) + '% ';  //'PORCENTAJE DE ESTUDIANTES QUE ALCANZARON EL 70% DEL TOTAL DE PUNTOS EN HSE Y TECH'
  divDato3.style.color = '#2b2b2b';
  divDato3.className = 'dato-class';

  divDato4.innerText = 'NPS: ' + nps.toFixed(2);  //'NPS'
  divDato4.style.color = '#2b2b2b';
  divDato4.className = 'dato-class';

  divDato5.innerText = 'Estudiantes con Meta Tech: ' + studentsOverAverageTech + '\nPorcentaje: ' + studentsOverAverageTechRate.toFixed(2) + '%';  //'NÚMERO DE ESTUDIANTES SUPERAN 70% TECH Y PORCENTAJE'
  divDato5.style.color = '#2b2b2b';
  divDato5.className = 'dato-class';

  divDato6.innerText = 'Estudiantes con Meta HSE: ' + studentsOverAverageHSE + '\nPorcentaje: ' + studentsOverAverageHSERate.toFixed(2) + '% ';  //'NÚMERO DE ESTUDIANTES SUPERAN 70% HSE Y PORCENTAJE'
  divDato6.style.color = '#2b2b2b';
  divDato6.className = 'dato-class';

  divDato7.innerText = 'Alumnas Satisfechas: ' + averageSatisfaction.toFixed(2) + '% ';  //'ALUMNAS SATISFECHAS'
  divDato7.style.color = '#2b2b2b';
  divDato7.className = 'dato-class';

  divDato8.innerText = 'Puntos Teacher: ' + averageTeacher.toFixed(2) + '\nPuntos Jedi: ' + averageJedi.toFixed(2);  //'PUNTOS TEACHER Y TEACHER
  divDato8.style.color = '#2b2b2b';
  divDato8.className = 'dato-class';

  // divDato9.innerText = 'Puntos Jedi: ' + averageJedi.toFixed(2); //'PUNTOS JEDI'
  // divDato9.style.color = '#2b2b2b';
  // divDato9.className = 'dato-class';

  // divDato10.innerText = ;
  // divDato10.style.color = '#2b2b2b';
  // divDato10.className = 'dato-class';

   // //INDICAR DÓNDE SE CREARÁN LOS ELEMENTOS
  contenedorGraficas.appendChild(divContGrafGral); //amarillo contiene al negro
  divContGrafGral.appendChild(divGraf1); //negro contiene a rosa
  divContGrafGral.appendChild(divGraf2); //negro contiene a violeta
  divContGrafGral.appendChild(divGraf3);
  divContGrafGral.appendChild(divGraf4);
  divContGrafGral.appendChild(divGraf5);
  divContGrafGral.appendChild(divGraf6);
  divContGrafGral.appendChild(divGraf7);
  divContGrafGral.appendChild(divGraf8);
  // divContGrafGral.appendChild(divGraf9);
  // divContGrafGral.appendChild(divGraf10);


  divGraf1.appendChild(divDato1); //rosa contiene texto dato1
  divGraf1.appendChild(divGrafica1);//rosa contiene espacio para la gráfica1

  divGraf2.appendChild(divDato2); //violeta contiene texto dato2
  divGraf2.appendChild(divGrafica2);//rosa contiene espacio para la gráfica2

  divGraf3.appendChild(divDato3); //violeta contiene texto dato3
  divGraf3.appendChild(divGrafica3);//rosa contiene espacio para la gráfica3

  divGraf4.appendChild(divDato4); //violeta contiene texto dato4
  divGraf4.appendChild(divGrafica4);//rosa contiene espacio para la gráfica4

  divGraf5.appendChild(divDato5); //violeta contiene texto dato5
  divGraf5.appendChild(divGrafica5);//rosa contiene espacio para la gráfica5

  divGraf6.appendChild(divDato6); //violeta contiene texto dato6
  divGraf6.appendChild(divGrafica6);//rosa contiene espacio para la gráfica6

  divGraf7.appendChild(divDato7); //violeta contiene texto dato7
  divGraf7.appendChild(divGrafica7);//rosa contiene espacio para la gráfica7

  divGraf8.appendChild(divDato8); //violeta contiene texto dato8
  divGraf8.appendChild(divGrafica8);//rosa contiene espacio para la gráfica8

  // divGraf9.appendChild(divDato9); //violeta contiene texto dato9
  // divGraf9.appendChild(divGrafica9);//rosa contiene espacio para la gráfica9

  // divGraf10.appendChild(divDato10); //violeta contiene texto dato10
  // divGraf10.appendChild(divGrafica10);//rosa contiene espacio para la gráfica10


//+++++++++++++++++++++++++++++++ GRÁFICAS++++++++++++++++++++++++++++++++++//
//Gráfica puntos 1 y 2
  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart1);
      function drawChart1() {
        var data = google.visualization.arrayToDataTable([
          ['Estudiantes', 'Por Sede y Generación'],
          ['Activas', activeStudents],
          ['Deserción',desertedStudents],
        ]);
        var options = {
          title: 'Estudiantes por Sede y Generación',
          backgroundColor: 'transparent',
          is3D: true
        };
        var chart = new google.visualization.PieChart(document.getElementById('graphic1_3d'));
        chart.draw(data, options);
  }

//Gráfica punto 4
  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart2);
      function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          ['Estudiantes', 'Por Sede y Generación'],
          ['Meta', studentsOverAverageRate],
          ['No Meta', studentsNotOverAverageTechHSE],
        ]);
        var options = {
          title: 'Porcentaje de estudiantes que superan el 70% del total de sprint en Tech y HSE',
          backgroundColor: 'transparent',
          is3D: true
        };
        var chart = new google.visualization.PieChart(document.getElementById('graphic3_3d'));
        chart.draw(data, options);
  }
//Gráfica punto 5
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(dibujarGrafico);

   function dibujarGrafico() {
     // Tabla de datos: valores y etiquetas de la gráfica
     var data = google.visualization.arrayToDataTable([
       ['Raiting', '%'],
       ['Promoters', totalPromotors/numSprints],
       ['Passive', totalPassives/numSprints],
       ['Detractors', totalDetractors/numSprints]
     ]);
     var options = {
       title: 'Promedio de los Sprints Cursados',
       backgroundColor: 'transparent',
     }
     // Dibujar el gráfico
     new google.visualization.ColumnChart(
     //ColumnChart sería el tipo de gráfico a dibujar
       document.getElementById('graphic4_bar')
     ).draw(data, options);
   }



//Gráfica punto 7
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(dibujarGrafico4);

   function dibujarGrafico4() {
     // Tabla de datos: valores y etiquetas de la gráfica
     var data = google.visualization.arrayToDataTable([
       ['ARQ Student', '%'],
       ['noCumple', totalNoCumple/numSprints],
       ['cumple', totalCumple/numSprints],
       ['supera', totalSupera/numSprints]
     ]);
     var options = {
       title: 'Estudiantes Satisfechas con la Experiencia Laboratoria',
       backgroundColor: 'transparent',
     }
     // Dibujar el gráfico
     new google.visualization.ColumnChart(
     //ColumnChart sería el tipo de gráfico a dibujar
       document.getElementById('graphic7_bar')
     ).draw(data, options);
   }

//Gráfica punto 8 y9

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(dibujarGrafico5);

   function dibujarGrafico5() {
     // Tabla de datos: valores y etiquetas de la gráfica
     var data = google.visualization.arrayToDataTable([
       ['Puntos', '%'],
       ['Teacher', totalTeacher/numSprints],
       ['Jedi', totalJedi/numSprints]
     ]);
     var options = {
       title: 'Estudiantes Satisfechas con la Experiencia Laboratoria',
       backgroundColor: 'transparent',
     }
     // Dibujar el gráfico
     new google.visualization.ColumnChart(
     //ColumnChart sería el tipo de gráfico a dibujar
       document.getElementById('graphic8_bar')
     ).draw(data, options);
   }

}
