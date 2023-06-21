import { Component, OnInit } from '@angular/core';
import { IColumn, ITicket } from '../shared';
import { TicketService } from '../service/ticket.service';
import { Status } from '../shared/model/status';
import { MatDialog } from '@angular/material/dialog';
import { AddEditTicketComponent } from '../shared/add-edit-ticket/add-edit-ticket.component';

const cleanColumns = [
  {
    title: Status[0],
    tickets: [],
  },
  {
    title: Status[1],
    tickets: [],
  },
  {
    title: Status[2],
    tickets: [],
  },
  {
    title: Status[3],
    tickets: [],
  },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  columns: IColumn[] = structuredClone(cleanColumns);

  constructor(
    private ticketService: TicketService,
    private dialogService: MatDialog
  ) {}

  refresh(ticket?: ITicket): void {
    if (ticket) {
      this.columns = this.columns.map((column) => {
        const newTickets = column.tickets.filter(
          (item) => item._id !== ticket._id
        );
        return { title: column.title, tickets: newTickets };
      });
      this.columns[ticket.status || 0]?.tickets.push(ticket);
    } else {
      this.columns = structuredClone(cleanColumns);
      this.ticketService.getAllTickets().subscribe((values) => {
        values.data.forEach((item: any) => {
          this.columns[item.status]?.tickets.push(item);
        });
      });
    }
  }

  ngOnInit(): void {
    this.refresh(undefined);
  }

  ngOnInit(): void {
    this.refresh();
  }

  add() {
    const modalRef = this.dialogService.open(AddEditTicketComponent, {});
  }
}
