import { Component, Input } from '@angular/core';
import { ITicket } from '../interfaces';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss'],
})
export class TicketCardComponent {
  @Input() ticket: ITicket = { title: '', description: '' };

  constructor(private ticketService: TicketService){}

  onEdit() {
    console.log('edit button');
  }
}
