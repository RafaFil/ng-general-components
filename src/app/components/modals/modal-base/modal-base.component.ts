import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-base',
  templateUrl: './modal-base.component.html',
  styleUrls: ['./modal-base.component.css']
})
export class ModalBaseComponent implements OnInit {

  @Input() title! : string;

  constructor() { }

  ngOnInit(): void {
  }

}
