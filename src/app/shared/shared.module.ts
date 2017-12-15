import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';
import { LivereModule } from './livere/livere.module';
import { TranslatePipe } from './translate.pipe';
import { DataService } from './data.service';
import { CalculateService } from './calculate.service';

@NgModule({
  exports: [
    CommonModule,
    RouterModule,
    ClarityModule,
    LivereModule,
    FormsModule,
    ReactiveFormsModule,
    TranslatePipe,
  ],
  imports: [
    CommonModule,
  ],
  declarations: [TranslatePipe],
  providers: [DataService, CalculateService],
})
export class SharedModule {}
