/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {MmPanel} from 'components/panel';
import {MmFilter} from 'filter/filter';
// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  template: `<h1>Hello {{ name }}</h1>
  <mm-panel></mm-panel>
  <mm-filter></mm-filter>`,
  directives: [MmPanel,MmFilter]
})
// Component controller
class MyAppComponent {
  name: string;

  constructor() {
    this.name = 'Bob';
  }
}

bootstrap(MyAppComponent);
