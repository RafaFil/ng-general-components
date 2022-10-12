import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private title : string = "";
  private text : string = "";

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

  
  addCard(t:string, txt : string,temp:string) : void{
    this.cardsArr.push(new Card(t,txt,temp));
  }

  saveDataCard(t:string, txt : string){
    this.title = t;
    this.text = txt;
  }

  deleteCard() {
    console.log(this.title,this.text)
    for (let card of this.cardsArr){
      if (card.title === this.title) {
        if(card.text === this.text){
          let index = this.cardsArr.indexOf(card)
          this.cardsArr.splice(index,1);
        }
      }
    }
  }
  
}
