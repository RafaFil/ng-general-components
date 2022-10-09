import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cardsArr : Card[] = [
    {title: "title1", text: "text"},
    {title: "title2",text: "text2"},
    {title: "title3",text: "text3"},
    {title: "title4",text: "text4"}
  ];

  constructor() { }

  getCard() : Observable<Card[]> {
    const cards = of(this.cardsArr)
    return cards
  }

  addCard(t:string, txt : string) : void{
    this.cardsArr.push(new Card(t,txt));
  }

  deleteCard(t:string, txt : string) {
    for (let card of this.cardsArr){
      if (card.title === t) {
        if(card.text === txt){
          let index = this.cardsArr.indexOf(card)
          this.cardsArr.splice(index,1);
        }
      }
    }
  }
  
}
