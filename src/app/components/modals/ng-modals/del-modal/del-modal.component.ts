import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-del-modal',
  templateUrl: './del-modal.component.html',
  styleUrls: ['./del-modal.component.css']
})
export class DelModalComponent implements OnInit {

  @Input() title : string ="";
  @Input() text : string = "";


  constructor(public activeModal : NgbActiveModal,private cardService : CardsService) { }

  ngOnInit(): void {
  }

  deleteThis(){
    alert("eliminarrr")
    //this.cardService.deleteCard(this.title,this.text);
  }
}
