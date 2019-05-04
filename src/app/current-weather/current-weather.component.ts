import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../contract/ICurrentWeather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  protected current: ICurrentWeather;

  constructor() {
    this.current = {
      city: 'Nis',
      country: 'Serbija',
      date: new Date,
      image: 'assets/nis.jpg',
      temperature: 15,
      description: 'Suncano'
    }
  }

  ngOnInit() {
  }

}
