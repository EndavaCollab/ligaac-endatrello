import { Component } from '@angular/core';
import { IColumn } from '../shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  columns: IColumn[] = [
    {
      title: 'To do',
      tickets: [{ name: 'TicketA' }, { name: 'TicketB' }],
    },
    {
      title: 'In progress',
      tickets: [{ name: 'TicketA' }],
    },
    {
      title: 'In testing',
      tickets: [{ name: 'TicketA' }],
    },
    {
      title: 'Done',
      tickets: [{ name: 'TicketA' }],
    },
  ];
}
