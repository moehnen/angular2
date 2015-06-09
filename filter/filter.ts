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
    // this.items = [
    //   { id: 1, name: 'London', count: 2 },
    //   { id: 2, name: 'San Francisco', count: 12 },
    //   { id: 3, name: 'Berlin', count: 22 },
    //   { id: 4, name: 'Tokio', count: 23 },
    // ];
  }

  getItems(searchTerm: string): Promise<Array<ICity>> {
    if (!this.items) {
      return fetch('http://localhost:3000/cities')
        .then(response => {
          return response.json()
        }).then(json => {
          console.log('parsed json', json);
          this.items = json;
          return json.filter(item=> item.name.indexOf(searchTerm) !== -1);
        }).catch(ex => {
          console.log('parsing failed', ex)
        })
    } else {
      return new Promise((resolve, reject) => { resolve(this.items.filter(item=> item.name.indexOf(searchTerm) !== -1)); })
    }
  }
}

// Annotation section
@Component({
  selector: 'mm-filter',
  appInjector: [CitiesService]
})
@View({
  template: `<div>
	<input type="text" id="mmfilter">
  {{name}}
  <input type="button" #btn (click)="list = []">
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
  input: HTMLElement;
  list: Array<ICity> = [];

  constructor(citiesService: CitiesService) {
    this.list = [];
    this.name = 'Alice';
    this.input = document.getElementById('mmfilter');
    // console.log(this.input);
    
    // Get all distinct throttled key up events from the input
    let throttledInput = Rx.Observable
      .fromEvent(this.input, 'input')
      .map<string>(e => e.target.value) // Project the text from the input
    // .filter(text => text.length > 1) // Only if the text is longer than 2 characters
    //.throttle(150) // Pause for 750ms
      .distinctUntilChanged(); // Only if the value has changed

    throttledInput.subscribe(text => {
      citiesService.getItems(text).then(items => {
        console.log('items', items);
        this.list = items;
      })
    })
    //     let search = throttledInput
    //       .flatMapLatest(text => Rx.Observable.fromPromise(citiesService.getItems(text)));
    // 
    //     search.subscribe(items => {
    //       console.log('items',items);
    //       this.list = items;
    //     });           
    // Rx.Observable.fromEvent(this.elem, 'input')
    //   .subscribe((e: Event) => {
    //     console.log(e.target.value);
    //     
    //   });
  }
}
