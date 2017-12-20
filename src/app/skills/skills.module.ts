import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { SkillsListComponent } from './skills-list/skills-list.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [SkillsListComponent],
})
export class SkillsModule { }
