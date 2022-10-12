import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-grid-system2',
  templateUrl: './grid-system2.component.html',
  styleUrls: ['./grid-system2.component.css']
})
export class GridSystem2Component implements OnInit {
  
  cardsArr : Card[] = [];

  constructor(private cardService : CardsService) { }

  ngOnInit(): void {
    this.cardService.getCard().subscribe(cards => this.cardsArr = cards)
  }

}
