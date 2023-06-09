import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITicket } from '../interfaces';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss'],
})
export class TicketCardComponent {
  @Input() ticket: ITicket = {_id: '', title: '', description: '' };
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  constructor(private ticketService: TicketService) {}

  onEdit() {
    console.log('edit button');
  }

  moveTicket(direction: 'forward' | 'backwards') {
    const step = (direction === 'forward' ? 1 : -1);
    const newStatus = this.ticket.status === undefined ? 0 : this.ticket.status + step;
    const {title, description} = this.ticket;
    this.ticketService.updateTicket(this.ticket._id, {
      title: title,
      description: description,
      status: newStatus
    }).subscribe(() =>
      this.onChange.emit()
    );
  }

  onMoveForward() {
    this.moveTicket('forward');
  }

  onMoveBackwards() {
    this.moveTicket('backwards');
  }
}