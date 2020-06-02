import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Output() cardSelected = new EventEmitter();

  cards = [{
    name: 'Employee List',
    img: './assets/list.svg',
    borderColor: 'border-left-primary',
    textColor: 'text-primary'
  },
  {
    name: 'Add Employee',
    img: '',
    borderColor: 'border-left-warning',
    textColor: 'text-warning'
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

  onCardSelect(option) {
    this.cardSelected.emit(option);
  }

}
