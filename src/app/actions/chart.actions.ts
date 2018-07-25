import { Action } from '@ngrx/store';

export enum ActionTypes {
  AddPoint = '[Chart] Add Point',
  AddPointSuccess = '[Chart] Add Point Success'
}

export class AddPoint implements Action {
  readonly type = ActionTypes.AddPoint;
}

export class AddPointSuccess implements Action {
  readonly type = ActionTypes.AddPointSuccess;
  constructor(public payload: any) {}
}

export type Actions =
  | AddPoint
  | AddPointSuccess
  ;
