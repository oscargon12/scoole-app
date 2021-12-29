<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="https://cdn-icons-png.flaticon.com/512/616/616494.png" alt="Logo" width="80" height="80">

  <h1 align="center">Scoole App</h1>

  <p align="center">
    Tienda ecommerce creada en React
    <br />
  </p>
  <h6>Comisión 16985 de React JS en Coderhouse</h6>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Contenido</summary>
  <ol>
    <li>Acerca del proyecto</li>
    <li>Comandos disponibles</li>
    <li>Uso de librerías</li>
    <li>Arquitectura del proyecto</li>
    <li>Estilos</li>
    <li>Consideraciones finales</li>
  </ol>
</details>

________________________

## Acerca Del Proyecto
Este proyecto ha sido creado con el framework React JS [Create React App](https://github.com/facebook/create-react-app).

La aplicación **Scoole** ha sido creada como ejercicio de práctica para el curso de React JS de la Comisión 16985.\
**Scoole** dentro del ejercicio, funciona como ecommerce, para la compra de vehículos de transporte alternativo.\
Las distintas funcionalidades han sido creadas paso a paso conforme avanzó el curso y como entrega final -Además de los features desarrollados- se propone una mejora en la interfaz y en la usabilidad.

### Funcionalidades
- Navbar
- Catálogo
- Detalle de producto
- CartContext
- CartWidget
- Formulario de compra

________________________

## Comandos disponibles

Podrá obtener una versión del repositorio ejecutando en la terminal:

```git clone https://github.com/oscargon12/scoole-app.git```

### Luego...

### `npm install`
Permite la instalación de dependencias necesarias para la ejecución del proyecto
### `npm start`

Permite correr la aplicación en modo de desarrollo

Abre [http://localhost:3000](http://localhost:3000) en una pestaña del navegador.

La página se recargará con cada nuevo cambio del editor de código. \

Podrá ver el log de errores en la terminal.

### `npm test`

Corre la ejecución de pruebas en el modo de vigilancia interactiva. \

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Agrupa correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.\

La compilación está minificada y los nombres de los archivos incluyen los hashes.\
La aplicación estará lista para ser desplegada.

________________________

## Uso de librerías

Para una mejor experiencia y feedback en la aplicación se han implementado las siguientes librerías externas:

### `react-bootstrap`
Permite el uso del framework de UI Bootstrap dentro de la aplicación de React, esto agiliza el proceso de estilado y definición del layout y responsive

### `firebase`
Es la base de datos de la aplicación, permite acceder al API de productos y ordenes de compra mediante los métodos establecidos.

### `react-icons`
Funciona como una biblioteca de íconos que son usados en distintos puntos de la interfaz

### `react-router-dom`
Gestiona las rutas de la aplicación, entre otras ventajas, permite que la aplicación funciona como una SPA, sin generar nuevas recargas al acceder a una nueva sección

### `sweetalert2`
Permite mostrar las alertas de una manera más amigable, que las generadas nativamente por el navegador, usando jerarquías de información y feedback mediante iconografía y color.

________________________
## Arquitectura del proyeccto

Los componentes se ubican, cada uno, en distintos directorios, dentro de la carpeta `components`

Así mismo, los `context`, `helpers`, `router` y el `config` de firebase se manejan de manera independiente y modular
________________________

## Estilado
Los estilos del proyecto se manejaron globalmente, con el preprocesador SCSS
Lo que permitió generar una sola hoja de estilos para todo el proyecto.

Esta hoja de estilos a su vez es modular, donde el archivo principal `main.scss` consume a los archivos:

- `_variables.scss` donde se definen las variables de scss globales
- `_utility.scss` donde se definen algunas utilidades similares a las de bootstrap, pero más específicas como colores personalizados y el tipo de fuente
- `_componentes.scss` que permite dar estilo a componentes globales de la aplicación de manera más personalizada

________________________

## Consideraciones finales
Si bien dentro de las rúbricas de evaluación y las sugerencias brindadas por el profesor, está el no dejar código comentado este se mantuvo, ya que siendo un proceso de aprendizaje, funcionó como punto de referencia.

### `Debugging`
Bajo esta misma logica, se mantuvieron algunos debuggers que permitieron comprobar el correcto funcionamiento de la aplicación