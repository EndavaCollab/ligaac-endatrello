import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared';
import { DashboardComponent, DashboardModule } from './dashboard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DashboardModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
