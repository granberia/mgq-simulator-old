import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { AbilitiesListComponent } from './abilities-list/abilities-list.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [AbilitiesListComponent],
})
export class AbilitiesModule { }
