import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [CommonModule, MatIconModule, MatButtonModule],
})
export class SharedModule {}
