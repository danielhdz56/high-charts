import { Injectable } from '@angular/core';
import { Effect, Actions, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Observable, empty, of } from 'rxjs';
import { chartActions } from '../actions';
import { Action, Store } from '@ngrx/store';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { ApiChartService } from '../services';
import * as store from '../reducers';

@Injectable()
export class ChartEffects {
  @Effect()
  init$ = this._actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    switchMap(() => of(new chartActions.LoadMeterData()))
  );

  @Effect()
  load$ = this._actions$.pipe(
    ofType(chartActions.ActionTypes.LoadMeterData),
    switchMap(() => this._apiService.getData().pipe(
      map(data => new chartActions.LoadMeterDataSuccess(data)),
      catchError(() => of(new chartActions.LoadMeterDataError()))
    ))
  );


  constructor(
    private _actions$: Actions,
    private _apiService: ApiChartService,
    private _store$: Store<store.State>,
  ) {}
}
