# ToDo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build(qh & ad added)

### Install from zero
* install package $ npm install -g @angular/cli@1.6.5
* check version of package $ ng -v
* On a Mac, you should be able to upgrade node through Homebrew using $ brew upgrade node

### Build a project
* bulid new project $ ng new project-name
* explaination of each folder, please refer to https://www.learnhowtoprogram.com/javascript/angular/angular-cli-creating-a-project-99520017-0dd9-4e2b-a7eb-54922c5ea684

### Download and edit
* Clone GitHub repository to your personal device using terminal command `git clone https://github.com/balabala`
* go to root directory of this project
* run $ npm install
* run $ bower install
* run $ ng serve
* navigate to `http://localhost:4200/`;the app will automatically reload if you change any of the source files

### add new component
* $ ng generate component component-name (or $ ng g component component-name, for short).
* $npm install bootstrap --save (add bootstrap) and
revise styles part with
"styles": [
  "styles.css",
  "../node_modules/bootstrap/dist/css/bootstrap.min.css"
],
in .angular-cli.json

### old wording

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
