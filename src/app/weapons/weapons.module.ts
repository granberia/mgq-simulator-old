import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { WeaponsListComponent } from './weapons-list/weapons-list.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [WeaponsListComponent],
})
export class WeaponsModule { }
