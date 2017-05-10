# ElTiempo

Este proyecto fue creado con [Angular CLI](https://github.com/angular/angular-cli) versión 1.0.0-rc.2.

## Tabla de contenidos

- [Descripción](#descripcion)

## Descripción

El proyecto es un ejemplo sencillo del potencial de Angular 2 en combinación con la librería [Redux](http://redux.js.org/), para la sincronización del LocalStorage y la información de la aplicación. Está formada por un sistema sencillo de autenticación. Los usuarios registrados se guardan en el LocalStorage. Una vez autentificados los usuarios pueden acceder a: 
- Una primera página donde se muestra el tiempo que hace en ese instante en el municipio indicado en el registro (vía [OpenWeatherMap](https://openweathermap.org/api), y de aquellos otros municipios de la isla de Tenerife donde vaya pulsando.
- Una segunda página a modo de ejemplo sencillo de perfil. 

![SignIN](https://raw.githubusercontent.com/alejandro-ortega-freire/examples_angular2/master/elTiempo/imagesGit/elTiempoApp_SignIN.png)

## Servidor de desarrollo

Ejecuta `ng serve` y navega a `http://localhost:4200/`. La aplicación automáticamente recargará si realizas cualquier cambio en el código de los archivos.



