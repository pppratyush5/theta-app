import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'theta';
  menuSelected = '';

  constructor() {

  }

  menuItem(item: string) {
    this.menuSelected = item;
  }

}
