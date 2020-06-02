import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Output() optionSelected = new EventEmitter();

  ngOnInit() { }

  menuSelected(option) {
    this.optionSelected.emit(option);
  }

}
