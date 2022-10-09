import { Component, Input, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  @Input() cardTitle! : string;
  @Input() cardText! : string;

  constructor(private cardService : CardsService) { }

  ngOnInit(): void {
  }

  deleteThis(){
    this.cardService.deleteCard(this.cardTitle,this.cardText)
  }

}
