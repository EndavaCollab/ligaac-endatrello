import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, MatDialogModule],
})
export class DashboardModule {}
