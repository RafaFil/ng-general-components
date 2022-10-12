import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DelModalComponent } from '../../modals/ng-modals/del-modal/del-modal.component';
import { NgBootstrapModalComponent } from '../../modals/ng-modals/ng-bootstrap-modal/ng-bootstrap-modal.component';

@Component({
  selector: 'app-card-ng-bootstrap',
  templateUrl: './card-ng-bootstrap.component.html',
  styleUrls: ['./card-ng-bootstrap.component.css'],
  providers: [NgbModal]
})
export class CardNgBootstrapComponent implements OnInit {

  @Input() cardTitle !: string;
  @Input() cardText !: string;
  @Input() temperature !: string | undefined;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(){
    this.modalService.open(NgBootstrapModalComponent)
  }
  
  del(){
    this.modalService.open(DelModalComponent)
  }
}
