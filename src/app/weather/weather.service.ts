import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ICurrentWeather } from '../contracts/ICurrentWeather';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ICurrentWeatherData {
  weather: [{
    main: string,
    description: string,
    icon: string
  }];
  main: {
    temp: number
  };
  sys: {
    country: string
  };
  dt: number;
  name: string;
}

export interface IWeatherService {
  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather>;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements IWeatherService {

  constructor(private httpClient: HttpClient) { }

  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {

    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      temperature: data.main.temp,
      description: data.weather[0].description,
      image: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    };
  }

  private convertKelvinToFahrenheit(kelvin: number): number {
    return kelvin * 9 / 5 - 459.67;
  }

  private convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }

  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {

    // tslint:disable-next-line:max-line-length
    return this.httpClient.get<ICurrentWeatherData>(`${environment.baseUrl}openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.appId}`)
      .pipe(
        map(
          data => {
            return this.transformToICurrentWeather(data);
          }
        )
      );
  }
}
