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
      tickets: [],
    },
    {
      title: 'In testing',
      tickets: [],
    },
    {
      title: 'Done',
      tickets: [],
    },
  ];
}

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
      tickets: [],
    },
    {
      title: 'In testing',
      tickets: [],
    },
    {
      title: 'Done',
      tickets: [],
    },
  ];
}