import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { DeleteModalComponent } from '../../modals/delete-modal/delete-modal.component';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.css']
})
export class SimpleCardComponent implements OnInit {

  @Input() cardTitle !: string;
  @Input() cardText !: string;


  constructor(private cardService : CardsService) { }

  ngOnInit(): void {

  }

  saveData(){
    this.cardService.saveDataCard(this.cardTitle,this.cardText)
  }

}
