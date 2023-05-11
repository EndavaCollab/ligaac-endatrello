import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnComponent } from './column/column.component';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ColumnComponent, TicketCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    CommonModule,
    ColumnComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class SharedModule {}
