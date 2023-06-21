import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITicket } from '../interfaces';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent {
  @Input() title: string = '';
  @Input() tickets: ITicket[] = [];
  @Output() onChange: EventEmitter<any> = new EventEmitter();
}
