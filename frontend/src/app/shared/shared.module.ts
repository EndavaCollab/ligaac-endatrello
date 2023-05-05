import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnComponent } from './column/column.component';

@NgModule({
  declarations: [
    ColumnComponent
  ],
  imports: [CommonModule],
  exports: [CommonModule, ColumnComponent],
})
export class SharedModule {}
