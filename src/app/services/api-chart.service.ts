import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiChartService {
  getData(): Observable<any> {
    return this._http.get('../../assets/data.json');
  }

  constructor(private _http: HttpClient) { }
}
