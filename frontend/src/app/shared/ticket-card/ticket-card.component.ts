import { Component, Input } from '@angular/core';
import { ITicket } from '../interfaces';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss'],
})
export class TicketCardComponent {
  @Input() ticket: ITicket = { name: '' };

  onEdit() {
    console.log('edit button');
  }
}
