import { Injectable } from '@angular/core';
import { ICurrentWeather } from '../contracts/ICurrentWeather';
import { Observable, of } from 'rxjs';
import { IWeatherService } from './weather.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceFake implements IWeatherService {

  private fakeWeather: ICurrentWeather = {
    city: 'Nis',
    country: 'RS',
    date: 12334,
    image: '',
    temperature: 12,
    description: 'sun',
  }

  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(this.fakeWeather);
  }
}
