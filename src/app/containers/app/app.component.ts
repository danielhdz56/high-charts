import { Component } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { MeterData } from '../../models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  meterData$: Observable<MeterData[]>;
  constructor() {

  }
}
