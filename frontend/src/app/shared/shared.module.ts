import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnComponent } from './column/column.component';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddEditTicketComponent } from './add-edit-ticket/add-edit-ticket.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [ColumnComponent, TicketCardComponent, AddEditTicketComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule
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
