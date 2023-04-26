import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { DashboardComponent } from './dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, MatToolbarModule],
})
export class DashboardModule {}
