import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherComponent } from './current-weather.component';
import { WeatherService } from '../weather/weather.service';
import { WeatherServiceFake } from '../weather/weather.service.fake';

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentWeatherComponent],
      providers: [{
        provide: WeatherService,
        useClass: WeatherServiceFake
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixtureComp = TestBed.createComponent(CurrentWeatherComponent);
    fixtureComp.detectChanges();
    const compiled = fixtureComp.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Local Weather');
  });

  it(`should have as city 'Nis'`, () => {
    const fixtureCom = TestBed.createComponent(CurrentWeatherComponent);
    const app = fixtureCom.debugElement.componentInstance;
    expect(app.weatherService.fakeWeather.city).toEqual('Nis');
  });

  it(`should have as country code 'RS'`, () => {
    const fixtureCom = TestBed.createComponent(CurrentWeatherComponent);
    const app = fixtureCom.debugElement.componentInstance;
    expect(app.weatherService.fakeWeather.country).toEqual('RS');
  });
});
