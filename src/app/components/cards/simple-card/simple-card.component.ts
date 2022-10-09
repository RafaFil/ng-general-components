import { Component, OnInit, Input } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.css']
})
export class SimpleCardComponent implements OnInit {

  @Input() cardTitle !: string;
  @Input() cardText !: string;

  constructor() { }

  ngOnInit(): void {
  }

}
