import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Meter } from '../../models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input() dataSource: Meter[];
  displayedColumns: string[] = ['meterId'];
}
