import {  HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

getWeatherData(cityName: string) : Observable<WeatherData> {
 
  return this.http.get<WeatherData>('https://openweather43.p.rapidapi.com/weather', {
    headers: new HttpHeaders()
    .set('X-RapidAPI-Host', 'openweather43.p.rapidapi.com')
    .set('X-RapidAPI-Key', 'c025432ccfmsh8f08d941840e57ap17dd94jsndeb8507c039b'),
        params : new HttpParams()
        .set('q', cityName)
        .set('appid', 'da0f9c8d90bde7e619c3ec47766a42f4')
        .set('appid', 'da0f9c8d90bde7e619c3ec47766a42f4')
        .set('units', 'metric')

  } );

  }

}
