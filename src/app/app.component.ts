import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  items = ['luis', 'angel', 'frias'];

  addItem() {
    this.items.push('Item added');
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

}
