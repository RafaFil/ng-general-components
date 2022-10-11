import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-del-modal',
  templateUrl: './del-modal.component.html',
  styleUrls: ['./del-modal.component.css']
})
export class DelModalComponent implements OnInit {

  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }

  deleteThis(){

  }
}
