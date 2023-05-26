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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ColumnComponent, TicketCardComponent, AddEditTicketComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  exports: [
    CommonModule,
    ColumnComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
})
export class SharedModule {}
