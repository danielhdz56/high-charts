import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromChart from './chart.reducer';
import { environment } from '../../environments/environment';

export interface State {
  chart: fromChart.State;
}

export const reducers: ActionReducerMap<State> = {
  chart: fromChart.reducer
};

/** console.log all actions */
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.groupCollapsed('Store update');
    console.log('state', state);
    console.log('action', action);
    console.groupEnd();
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger, storeFreeze] : [];
