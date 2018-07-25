import { MeterData } from '../models';
import { chartActions } from '../actions';
import { groupBy, mapValues, Dictionary } from 'lodash';

const _ = { groupBy, mapValues };

export interface State  {
  ids: string[];
  entities: Dictionary<MeterData[]>;
  selectedEntityId: string;
}

const initialState: State = {
  ids: [],
  entities: {},
  selectedEntityId: ''
};

export function reducer(state = initialState, action: chartActions.Actions): State {
  switch (action.type) {
    case chartActions.ActionTypes.LoadMeterDataSuccess: {
      const entities = _.mapValues(_.groupBy(action.payload, 'Meter_ID'));
      const ids = Object.keys(entities);
      return {
        ids,
        entities,
        selectedEntityId: ids[0]
      };
    }

    case chartActions.ActionTypes.SelectMeterData: {

      return { ...state, selectedEntityId: action.payload };
    }

    default: {
      return state;
    }
  }

}

export const getIds = (state: State) => state.ids;
export const getEntities = (state: State) => state.entities;
export const getSelectedEntity = (state: State) => {
  const meter: any = _.groupBy(state.entities[state.selectedEntityId], 'Type');
  const baseLoad = [];
  const baseLoadData = (meter.BaseLoad || []).map(day => {
    const arr = [];
    for (let hour = 1; hour <= 24; hour++) {
      arr.push([new Date(day.Date).setHours(hour), day[hour]]);
    }
    return arr;
  });
  baseLoadData.forEach(d => baseLoad.push(...d));
  return { baseLoad };
};
