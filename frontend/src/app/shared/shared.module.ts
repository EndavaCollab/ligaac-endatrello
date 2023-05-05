import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnComponent } from './column/column.component';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    ColumnComponent,
    TicketCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    CommonModule,
    ColumnComponent
  ]
})

export class SharedModule {}
