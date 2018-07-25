import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as store from '../../reducers';
import { MeterData, Meter } from '../../models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  meterData$: Observable<MeterData[]>;
  meters$: Observable<Meter[]>;
  constructor(private _store$: Store<store.State>) {
    this.meterData$ = this._store$.pipe(select(store.selectAllMeterData));
    this.meters$ = this._store$.pipe(select(store.getMeters));
  }
}
