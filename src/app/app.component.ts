import { Component, ViewChild } from '@angular/core';
import { CardWApiComponent } from './components/cards/card-w-api/card-w-api.component';
import { WeatherApiService } from './services/weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('temp') card !: CardWApiComponent;
  a= "Titulo"
  b = "Aca va texto"
  title = 'componentes-generales';

  weatherservice : WeatherApiService = new WeatherApiService();


  changeTitle(t : string){
    this.a = t;
  }

  async tiempo(lg : string,lt:string,date:string){
    const response = await this.weatherservice.weather(lg,lt,date)
    this.card.apiContent = response
  }

}
