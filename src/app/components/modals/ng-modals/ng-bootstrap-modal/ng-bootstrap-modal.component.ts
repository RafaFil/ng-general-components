import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CardsService } from 'src/app/services/cards.service';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-ng-bootstrap-modal',
  templateUrl: './ng-bootstrap-modal.component.html',
  styleUrls: ['./ng-bootstrap-modal.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class NgBootstrapModalComponent implements OnInit {

  cardTitle = ""
  cardText = ""
  datetime = ""

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

  constructor(config: NgbModalConfig, public activeModal: NgbActiveModal,
    private cardService : CardsService,private apiService : WeatherApiService) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  async addCard(){
    const temp = await this.apiService.weather("-34.8941","-56.0675",this.datetime)
    this.cardService.addCard(this.cardTitle,this.cardText,temp)
  }

}
