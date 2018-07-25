import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as store from '../../reducers';
import { MeterData } from '../../models';
import { chartActions } from '../../actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  meterData$: Observable<any>;
  meterIds$: Observable<string[]>;
  constructor(private _store$: Store<store.State>) {
    this.meterIds$ = this._store$.pipe(select(store.getMeterIds));
    this.meterData$ = this._store$.pipe(select(store.getSelectedMeter));
  }

  onSelectMeter(id: string) {
    this._store$.dispatch(new chartActions.SelectMeterData(id));
  }
}
