import { Injectable } from '@angular/core';
import {Moment} from 'moment';
import {Observable} from 'rxjs/Rx';
import * as lodash from 'lodash';
import * as moment from 'moment';
import {WeatherDataInterface} from './weather-data.interface';

@Injectable()
export class WeatherDataService {
  constructor() { }

  loadData(date:Moment):Observable<WeatherDataInterface> {
    console.log(`Querying for ${date.format(format)}`);
    return Observable.create(observer => {
      setTimeout(() => {
        console.log(`Data loaded for ${date.format(format)}`);
        observer.next(data[date.format(format)]);
      }, Math.random() * 3000);
    });
  }
}
// Create random data for the last 30 days
const format = 'YYYY-MM-DD';
const data = {}
lodash.range(30).forEach(i => {
  const day = moment().subtract(i, 'days').format(format);
  data[day] = {
    temperature: Math.floor(20+Math.random()*12),
    rain: Math.random() > 0.8, // 20% rain chances
    shortDescription: `Weather for ${day}`
  }
});
