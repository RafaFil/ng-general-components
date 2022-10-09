import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-w-api',
  templateUrl: './card-w-api.component.html',
  styleUrls: ['./card-w-api.component.css']
})
export class CardWApiComponent implements OnInit {

  @Input() apiContent! : string;

  constructor() { }

  ngOnInit(): void {
  }

}
