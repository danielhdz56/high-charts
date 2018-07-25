import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { MeterData } from '../models';
import { chartActions } from '../actions';

export const adapter: EntityAdapter<MeterData> = createEntityAdapter<MeterData>({
  selectId: (data: MeterData) => data._id.$oid
});

export interface State extends EntityState<any> {
}

const initialState: State = adapter.getInitialState();

export function reducer(state = initialState, action: chartActions.Actions): State {
  switch (action.type) {
    case chartActions.ActionTypes.LoadMeterDataSuccess: {
      return adapter.addMany(action.payload, state);
    }

    default: {
      return state;
    }
  }
}
