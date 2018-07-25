import { MeterData } from './meter-data.model';

export interface Meter {
  BaseLoad: MeterData[];
  WSL: MeterData[];
  TSL: MeterData[];
}
