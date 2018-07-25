import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiChartService {
  baseRoute = `/api/charts`;


  getPoint(): Observable<any> {
    return this._http.get<any>(`${this.baseRoute}/point`);
  }

  constructor(private _http: HttpClient) { }
}
