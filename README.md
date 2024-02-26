# Studies related to the book Learning Angular 

Aristeidis Bampakos & Pablo Deeleman

Fourth Edition

Packt Publishing

https://github.com/PacktPublishing/Learning-Angular-Fourth-Edition 

## Project MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.3.

### Create a new project

ng new app_name --no-standalone

ng new app_name --routing --style=css  

### Code scaffolding

ng generate component|directive|pipe|service|class|guard|interface|enum|module name

Example:

- Create a new module

```ng generate module module_name```

- Create a new directive

-- structural directive: used to add elements into the DOM

-- attribute directive: used to manipulate the appearance and behavior of DOM elements

-- component directive: directives with templates

```ng generate directive copyright```

```ng generate directive autofocus --standalone``` not registered


- Create a new component (components are angular directives with a view)

```ng generate component component_name```

- Create a new pipe

```ng generate pipe sort```

```ng generate pipe filter --standalone```


### Add Angular Material

```ng add @angular/material```

ou 

```@angular/material@version```

### Development server

Run `ng serve` for a dev server and navigate to `http://localhost:4200/`. 

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


