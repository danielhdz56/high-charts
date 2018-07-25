import { Component, ChangeDetectionStrategy, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() meterData: any;
  chart: Chart;

  ngOnInit() {
    this.chart = new Chart({
      chart: {
        type: 'area',
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
      series: this.createSeries()
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chart) {
      this.chart.ref.update({
        series: this.createSeries()
      });
    }
  }

  createSeries() {
    return [
      {
        name: 'Weather Sensitive',
        data: this.meterData.WSL
      },
      {
        name: 'Time Sensitive',
        data: this.meterData.TSL
      },
      {
        name: 'Base',
        data: this.meterData.BaseLoad
      }
    ];
  }

}
