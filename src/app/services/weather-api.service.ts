import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor() { }

  async weather(latitude :string , longitude : string, dateT : string){
  
  const date= dateT.slice(0, dateT.indexOf('T'));
  const hour = dateT.slice(dateT.indexOf('T')+1,dateT.length-3).replace("0","");
  console.log(hour)
  const link = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&start_date=${date}&end_date=${date}`;
  console.log(link)
  const response = await fetch(link);
  const json = await response.json();
  const currentTemp = json.hourly.temperature_2m
  console.log(currentTemp)
  return currentTemp[hour];
}

}
