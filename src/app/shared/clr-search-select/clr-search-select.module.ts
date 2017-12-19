import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';
import { ClrSearchSelectComponent } from './clr-search-select.component';

@NgModule({
    imports: [CommonModule, FormsModule, ClarityModule],
    exports: [ClrSearchSelectComponent],
    declarations: [ClrSearchSelectComponent],
})
export class ClrSearchSelectModule {}
