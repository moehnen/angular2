/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'mm-panel'
})
@View({
  template: `<div>Hello from panel {{name}}</div>
  `
})
// Component controller
export class MmPanel {
  name: string;
  
  constructor() {
    this.name = 'PANEL';
  }
}
