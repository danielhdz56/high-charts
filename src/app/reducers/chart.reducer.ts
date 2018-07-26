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
  return {
    BaseLoad: formatData(meter.BaseLoad),
    WSL: formatData(meter.WSL),
    TSL: formatData(meter.TSL)
  };
};

function formatData(arr: any[]) {
  const formattedArr = [];
  const tempArr = (arr || []).map(day => {
    const formattedDays = [];
    for (let hour = 1; hour <= 24; hour++) {
      // Adjusted for time diff
      formattedDays.push([new Date(day.Date).setHours(hour + 19), day[hour]]);
    }
    return formattedDays;
  });
  tempArr.forEach(t => formattedArr.push(...t));
  return formattedArr;
}
