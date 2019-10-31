import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';
  items = ['luis', 'angel', 'frias'];

  objeto = {};

  power = 10;

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.items.push('Item added');
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

}
