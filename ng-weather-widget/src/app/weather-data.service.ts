import { Injectable } from '@angular/core';
import sampleData from './sampledata';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  getWeather(city: string) {
    let weatherInfo = sampleData.filter(w => w.name === city)[0];
    return weatherInfo ? Promise.resolve(weatherInfo) : Promise.reject(`Couldn\'t find weather of the city ${city}`);
  }
}
