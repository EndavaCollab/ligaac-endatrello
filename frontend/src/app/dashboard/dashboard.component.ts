import { Component, OnInit } from '@angular/core';
import { IColumn } from '../shared';
import { TicketService } from '../service/ticket.service';
import { Status } from '../shared/model/status';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { AddEditTicketComponent } from '../shared/add-edit-ticket/add-edit-ticket.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  columns: IColumn[] = [
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

  constructor(private ticketService: TicketService,
    private dialogService: MatDialog){
    
  }

  ngOnInit(): void {
      this.ticketService.getAllTickets().subscribe((values) => {
        values.data.forEach((item: any) => {
          this.columns[item.status]?.tickets.push(item);
        });
      });
  }

  add(){
    const modelRef = this.dialogService.open(AddEditTicketComponent,{});
  };

}
