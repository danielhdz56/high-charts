import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { MeterData } from '../../models';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent {
  @Input() meterData: MeterData[];
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3]
      }
    ]
  });

  // add point to chart serie
  add() {
    console.log(this.meterData);
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

}
