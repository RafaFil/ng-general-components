import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-grid-system',
  templateUrl: './grid-system.component.html',
  styleUrls: ['./grid-system.component.css']
})
export class GridSystemComponent implements OnInit {

  cardsArr : Card[] = [];

  constructor(private cardService : CardsService) { }

  ngOnInit(): void {
    this.getCardsArr();
  }

  getCardsArr(){
    this.cardService.getCard().subscribe(cards => this.cardsArr = cards)
  }

}
