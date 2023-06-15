import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITicket } from '../interfaces';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss'],
})
export class TicketCardComponent {
  @Input() ticket: ITicket = { _id: '', title: '', description: '' };
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  constructor(private ticketService: TicketService) {}

  onEdit() {
    console.log('edit button');
  }

  moveTicket(direction: 'forwards' | 'backwards') {
    const step = direction === 'forwards' ? 1 : -1;
    const newStatus =
      this.ticket.status === undefined ? 0 : this.ticket.status + step;
    const { title, description } = this.ticket;
    this.ticketService
      .updateTicket(this.ticket._id, {
        title: title,
        description: description,
        status: newStatus,
      })
      .subscribe((ticket) => {
        this.onChange.emit(ticket.data);
      });
  }

  onMoveForward() {
    this.moveTicket('forwards');
  }

  onMoveBackwards() {
    this.moveTicket('backwards');
  }

  onDelete() {
    this.ticketService
      .deleteTicket(this.ticket._id)
      .subscribe(() => this.onChange.emit());
  }
}
