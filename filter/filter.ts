/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../node_modules/rx/ts/rx.all.d.ts" />
/// <reference path="../typings/whatwg-fetch/whatwg-fetch.d.ts" />

import {Component, View, NgFor} from 'angular2/angular2';
import * as Rx from 'rx.all';
// import * from 'fetch';

interface ICity {
  id: number,
  name: string,
  count: number
}

class CitiesService {
  private items: Array<ICity>;
  constructor() {
    

    this.items = [
      { id: 1, name: 'London', count: 2 },
      { id: 2, name: 'San Francisco', count: 12 },
      { id: 3, name: 'Berlin', count: 22 },
      { id: 4, name: 'Tokio', count: 23 },
    ];
  }

  getItems(searchTerm: string) {
//     if (!this.items) {
//       return fetch('http://localhost:3000/cities')
//         .then(response => {
//           return response.json()
//         }).then(json => {
//           console.log('parsed json', json);
//           this.items = json;
//           return json;
//         }).catch(ex => {
//           console.log('parsing failed', ex)
//         })
//     } else {
//       return 
//     }
// 

    return this.items.filter(item=>item.name.indexOf(searchTerm) !== -1);
  }
}

// Annotation section
@Component({
  selector: 'mm-filter',
  appInjector: [CitiesService]
})
@View({
  template: `<div>
	<input type="text" id="mmfilter" [(value)]="name">
  {{name}}
  <input type="button" #btn>
  <ul>
     <li *ng-for="#item of list">
        {{ item.name }}
     </li>
  </ul>
  </div>`,
  directives: [NgFor]
})
// Component controller
export class MmFilter {
  name: string;
  elem: HTMLElement;
  list: Array<any>;

  constructor(citiesService: CitiesService) {
    this.list = citiesService.getItems('');
    this.name = 'Alice';
    this.elem = document.getElementById('mmfilter');
    console.log(this.elem);
    Rx.Observable.fromEvent(this.elem, 'input')
      .subscribe((e: Event) => {
        console.log(e.target.value);
        this.list = citiesService.getItems(e.target.value);
      });
  }
}
