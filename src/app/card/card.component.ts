import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Output() cardSelected = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onCardSelect(option) {
    this.cardSelected.emit(option);
  }

}
