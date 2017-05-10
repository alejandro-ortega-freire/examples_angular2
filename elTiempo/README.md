# ElTiempo

Este proyecto fue creado con [Angular CLI](https://github.com/angular/angular-cli) versión 1.0.0-rc.2.

## Tabla de contenidos

- [Descripción](#descripcion)
- [Dependencias](#dependencias)
- [Servidor de desarrollo](#servidor-de-dearrollo)

## Descripción

El proyecto es un ejemplo sencillo del potencial de Angular 2 en combinación con la librería [Redux](http://redux.js.org/), para la sincronización del LocalStorage y la información de la aplicación. Está formada por un sistema sencillo de autenticación. Los usuarios registrados se guardan en el LocalStorage. Una vez autentificados los usuarios pueden acceder a: 

![SignIN](https://raw.githubusercontent.com/alejandro-ortega-freire/examples_angular2/master/elTiempo/imagesGit/elTiempoApp_SignIN.png)

![SignUP](https://raw.githubusercontent.com/alejandro-ortega-freire/examples_angular2/master/elTiempo/imagesGit/elTiempoApp_SignUP.png)

- Una primera página donde se muestra el tiempo que hace en ese instante en el municipio indicado en el registro (vía [OpenWeatherMap](https://openweathermap.org/api), y de aquellos otros municipios de la isla de Tenerife donde vaya pulsando.

![Wheather](https://raw.githubusercontent.com/alejandro-ortega-freire/examples_angular2/master/elTiempo/imagesGit/elTiempoApp_Weather.png)

- Una segunda página a modo de ejemplo sencillo de perfil. 

![Profile](https://raw.githubusercontent.com/alejandro-ortega-freire/examples_angular2/master/elTiempo/imagesGit/elTiempoApp_Profile.png)

## Dependencias

El proyecto requiere la instalación de las siguientes librerías:

### Obligatorias
Instalar [@ngrx/core](https://github.com/ngrx/core) and [@ngrx/store](https://github.com/ngrx/store) desde npm:
```bash
npm install @ngrx/core @ngrx/store --save
```

Instalar [ngrx-store-localStorage](https://github.com/btroncone/ngrx-store-localstorage) desde npm:
```bash
npm install ngrx-store-localstorage --save
```

### Opcionales
- [@ngrx/store-devtools](https://github.com/ngrx/store-devtools) herramientas de monitorización en el navegador
- [ngrx-store-freeze](https://github.com/codewareio/ngrx-store-freeze) @ngrx/store meta reducer que evita cambios indeseados en el Store
- [angular-environment](https://github.com/juanpablob/angular-environment) facilita el acceso a diferentes tipos de variables usuales

## Servidor de desarrollo

Ejecuta `ng serve` y navega a `http://localhost:4200/`. La aplicación automáticamente recargará si realizas cualquier cambio en el código de los archivos.
