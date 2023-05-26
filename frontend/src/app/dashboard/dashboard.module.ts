import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, MatDialogModule],
})
export class DashboardModule {}
