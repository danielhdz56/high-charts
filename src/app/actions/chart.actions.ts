import { Action } from '@ngrx/store';
import { MeterData } from '../models';

export enum ActionTypes {
  LoadMeterData = '[Chart] Load Meter Data',
  LoadMeterDataSuccess = '[Chart] Load Meter Data Success',
  LoadMeterDataError = '[Chart] Load Meter Data Error',
  SelectMeterData = '[Chart] Select Meter Data'
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

export class SelectMeterData implements Action {
  readonly type = ActionTypes.SelectMeterData;
  constructor(public payload: string) {}
}

export type Actions =
  | LoadMeterData
  | LoadMeterDataSuccess
  | LoadMeterDataError
  | SelectMeterData
  ;
