import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { RacesListComponent } from './races-list/races-list.component';
import { RacesDetailComponent } from './races-detail/races-detail.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [RacesListComponent, RacesDetailComponent],
})
export class RacesModule { }
