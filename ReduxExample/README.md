# Redux Example

Este proyecto fue creado con [Angular CLI](https://github.com/angular/angular-cli) versión 1.0.0-rc.2.

## Tabla de contenidos

- [Descripción](#descripcion)
- [Dependencias](#dependencias)
- [Servidor de desarrollo](#servidordedearrollo)

## Descripción

El proyecto es un ejemplo sencillo del potencial de Angular 2 en combinación con la librería [Redux](http://redux.js.org/), para la sincronización del LocalStorage y la información de la aplicación. Está formada por tres componentes. 
El primero un contador, el segundo compuesto de dos inputs para guardar el nombre y el apellido, y el tercero sólo recoge la información del segundo componente y lo muestra. Toda la información se centraliza a través del LocalStorage.

Este proyecto forma parte de las práctics realizadas en el último año del CFGS de Desarrollo de Aplicaciones Multiplataforma y sólo tienen como objeto aprender y familiarizarse con Angular y Redux. 

![App](https://raw.githubusercontent.com/alejandro-ortega-freire/examples_angular2/master/ReduxExample/imagesGit/app.png)

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

## Servidor de desarrollo

Ejecuta `ng serve` y navega a `http://localhost:4200/`. La aplicación automáticamente recargará si realizas cualquier cambio en el código de los archivos.
