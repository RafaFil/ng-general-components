import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-button1',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.css']
})
export class Button1Component implements OnInit {

  constructor(private cardService : CardsService) { }

  ngOnInit(): void {
  }

  add(t: string, txt: string){
    this.cardService.addCard(t,txt);
  }

}
