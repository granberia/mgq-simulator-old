import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { AccessoriesListComponent } from './accessories-list/accessories-list.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [AccessoriesListComponent],
})
export class AccessoriesModule { }
