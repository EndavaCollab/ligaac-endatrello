import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  columns = [
    {
      title: 'To do',
      tickets: ['TicketA', 'TicketB']
    },
    {
      title: 'In progress',
      tickets: ['TicketA', 'TicketB']
    },
    {
      title: 'In testing',
      tickets: ['TicketA', 'TicketB']
    },
    {
      title: 'Done',
      tickets: ['TicketA', 'TicketB']
    },
]
}
