import {
  ActionReducer,
  ActionReducerMap,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { uniqBy } from 'lodash';
import * as fromChart from './chart.reducer';
import { environment } from '../../environments/environment';
import { Meter } from '../models';

const _ = { uniqBy };

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

export const getChartState = (state: State) => state.chart;
export const getMeterIds = createSelector(getChartState, fromChart.getIds);
export const getMeters = createSelector(getChartState, fromChart.getEntities);
export const getSelectedMeter = createSelector(getChartState, fromChart.getSelectedEntity);
