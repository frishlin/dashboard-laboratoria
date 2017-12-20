# Dasboard Laboratoria

* **Curso:** _Creando tu primer sitio web interactivo_
* **Unidad:** _Data Dasboard_

***
Este es el reto final de la unidad `Creando sitio web interactivo`. Consiste en optimizar la data de las alumnas de Laboratoria en todas sus sedes, esto con la finalidad de que los Training Managers puedan acceder a la informaciòn de una manera fácil y rápida.

## Objetivo

* Analizar la mayor cantidad de datos respecto al desempeño de las estudiantes y asì mejorar el desarrollo en su aprendizaje.

* Ver los siguientes datos en una herramienta web de manera fácil y rápida:

  - `Total` de estudiantes presentes por `sede` y por `generación`

  - El `porcentaje` de `deserción` de estudiantes.

  - `Cantidad` de estudiantes que `superan la meta de puntos en promedio` de todos los sprints cursados en laboratoria (meta: 70%).

  - `Porcentaje` que representa el dato anterior en relación al `total` de estudiantes.

  - La `cantidad` y el `porcentaje` que representa el `total` de estudiantes que `superan la meta` de puntos `técnicos` y `HSE` en promedio y por sprint

  - `Porcentaje` de estudiantes `satisfechas` con la experiencia de Laboratoria

  - Puntuación `promedio` de los `profesores`

  - Puntuación `promedio` de los `jedi masters`

  - El `Net Promoter Score` (NPS) promedio de los sprints cursados.

      * Calculado respecto a una encuesta aplicada sobre la recomendación que darían de Laboratoria con la formula

  ```
    [Promoters] = [Respuestas 9 o 10] / [Total respuestas] * 100
    [Passive] = [Respuestas 7 u 8] / [Total respuestas] * 100
    [Detractors] = [Respuestas entre 1 y 6] / [Total respuestas] * 100

    [NPS] = [Promoters] - [Detractors]
  ```
***

## Consideraciones

  I. El dashboard debera trabajarse por parejas

  II. Tener una planificacion

  III.  Definir el diseño

  IV. Implementar el dataDashboard usando `html`, `css` y `js`

  V. Desplegar el producto en GitHub Pages

***

## Flujo de trabajo

1. Realizamos un `fork` del siguiente repositorio

![GitHub](https://github.com/Laboratoria-learning/data-dashboard)

2. Analizamos la data de las estudiantes encontrando lo siguiente;

  * La sede `Arequipa` se conforma de 2 generaciones: 2016-2 y 2017-1, con 4 y 3 sprint, respectivamente.
  * La sede `CDMX` se conforma de 2 generaciones: 2017-1 y 2017-2, con 3 y 2 sprints, respectivamente.
  * La sede `Lima` se conforma de 3 generaciones: 2016-2, 2017-1 y 2017-2, con 2, 4 y 2 sprints, respectivamente.
  * La sede `Santiago de Chile` se conforma de 3 generaciones: 2016-2, 2017-1 y 2017-2, con 4, 3 y 2 sprints, respectivamente.

```
-Diferencias sprints Arequipa 2016-2, 4 sprints | Lima sólo 2.
-En la generación 2017-1, Arequipa tuvo 3 sprints y Lima 4.
```
_Se tomaron en cuenta en ambas sedes con la opción NA para que contengan los mismos datos_

  3.- Analisis de la información que requiere el cliente;

  - Total de estudiantes presentes por sede y generación:
      - Sumar el total de True de cada generación y sede
  - El porcentaje de deserción de estudiantes.
      - Realizar la suma total de True y False
      - Realizar la suma total de False
      - Obtener el porcentaje con la fórmula: totalFalse * 100 / TotalFalseTrue
  - La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech.
      - Obtener promedio de los sprint que conforman cada generación, por alumna, tanto de Tech como de HSE.
      - Con un if identificar a las alumnas que obtuvieron un promedio >= 70, tanto de HSE como de Tech
  - El porcentaje que representa el dato anterior en relación al total de estudiantes.
    - Obtener el porcentaje de alumnas que obtuvieron la mínima aprobatoria con la fórmula: totalMínimoAprobatorio * 100 / totalFalseTrue

***
## Presentación

![GitHub](assets/images/)

***


##
