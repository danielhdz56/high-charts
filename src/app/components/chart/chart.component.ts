import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Meter } from '../../models';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit {
  @Input() meterData: Meter;
  chart: Chart;

  ngOnInit() {
    this.chart = new Chart({
      chart: {
        type: 'area'
      },
      title: {
        text: 'Meter Data'
      },
      xAxis: {
        type: 'datetime',
      },
      yAxis: {
        labels: {
            formatter: function () {
                return this.value + 'kWh';
            }
        },
        title: {
          text: ''
        }
      },
      series: [
        {
          name: 'Weather Sensitive',
          data: [[1522044000000, 8], [1522047600000, 12]]
        },
        {
          name: 'Time Sensitive'
        },
        {
          name: 'Base'
        }
      ]
    });
  }

}
