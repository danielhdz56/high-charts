import { Action } from '@ngrx/store';
import { MeterData } from '../models';

export enum ActionTypes {
  LoadMeterData = '[Chart] Load Meter Data',
  LoadMeterDataSuccess = '[Chart] Load Meter Data Success',
  LoadMeterDataError = '[Chart] Load Meter Data Error'
}

export class LoadMeterData implements Action {
  readonly type = ActionTypes.LoadMeterData;
}

export class LoadMeterDataSuccess implements Action {
  readonly type = ActionTypes.LoadMeterDataSuccess;
  constructor(public payload: MeterData[]) {}
}

export class LoadMeterDataError implements Action {
  readonly type = ActionTypes.LoadMeterDataError;
}

export type Actions =
  | LoadMeterData
  | LoadMeterDataSuccess
  | LoadMeterDataError
  ;
