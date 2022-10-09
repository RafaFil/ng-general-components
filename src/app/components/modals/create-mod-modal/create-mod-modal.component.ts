import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-create-mod-modal',
  templateUrl: './create-mod-modal.component.html',
  styleUrls: ['./create-mod-modal.component.css']
})
export class CreateModModalComponent implements OnInit {

  @Input() cardTitle : string = "";
  @Input() cardText : string = "";

  cities: readonly string[] = [
    'Montevideo',
    'Ámsterdam',
    'Brasilia',
    'Chicago',
    'Nueva Dehli',
    'Seúl',
    'El Cairo',
    'Nairobi',
    'Berlín'
  ]



  constructor(private cardService : CardsService) { }

  ngOnInit(): void {
  }

  addCard(){
    this.cardService.addCard(this.cardTitle,this.cardText)
  }
  

}
