import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { ActorsListComponent } from './actors-list/actors-list.component';
import { ActorsDetailComponent } from './actors-detail/actors-detail.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [ActorsListComponent, ActorsDetailComponent],
})
export class ActorsModule { }
