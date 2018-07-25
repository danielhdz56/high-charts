import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, empty } from 'rxjs';
import { chartActions } from '../actions';
import { Action, Store } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ApiChartService } from '../services';
import * as store from '../reducers';

@Injectable()
export class ChartEffects {
  @Effect()
  addPoint$: Observable<Action> = this._actions$.pipe(
    ofType(chartActions.ActionTypes.AddPoint),
    switchMap(() => {
      return this._apiService.getPoint().pipe(
        map(point => new chartActions.AddPointSuccess(point),
          catchError(err => empty())
        ));
    })
  );


  constructor(
    private _actions$: Actions,
    private _apiService: ApiChartService,
    private _store$: Store<store.State>,
  ) {}
}
