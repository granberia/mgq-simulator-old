import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CalculatorViewComponent } from 'app/calculator/calculator-view/calculator-view.component';
import { SharedModule } from 'app/shared/shared.module';
import { ElementResistViewComponent } from './calculator-view/element-resist-view/element-resist-view.component';
import { StateResistViewComponent } from './calculator-view/state-resist-view/state-resist-view.component';
import { BasisViewComponent } from './calculator-view/basis-view/basis-view.component';
import { SpecialViewComponent } from './calculator-view/special-view/special-view.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [
    CalculatorViewComponent,
    ElementResistViewComponent,
    StateResistViewComponent,
    BasisViewComponent,
    SpecialViewComponent,
  ],
})
export class CalculatorModule { }
