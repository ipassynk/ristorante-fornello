import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {MenuItem} from 'app/model/menu.model';

@Injectable()
export class MenuService {
  private menuUrl = 'api/menu';  // URL to web API

  constructor(private http: Http) {
  }

  get(): Observable<Array<MenuItem>> {
    return this.http.get(this.menuUrl)
      .map(res => res.json())
      .map(({data}) => data);
  }
}
