import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RouterModule, Routes } from '@angular/router';

import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { CalculatorViewComponent } from './calculator/calculator-view/calculator-view.component';
import { ActorsListComponent } from './actors/actors-list/actors-list.component';
import { ActorsDetailComponent } from './actors/actors-detail/actors-detail.component';
import { JobsListComponent } from './jobs/jobs-list/jobs-list.component';
import { RacesListComponent } from './races/races-list/races-list.component';

export const ROUTES: Routes = [
  {
    path: '/',
    component: CalculatorViewComponent,
    pathMatch: 'full',
  },
  { path: 'main/:id', component: CalculatorViewComponent },
  { path: 'actors', component: ActorsListComponent },
  { path: 'actors/:id', component: ActorsDetailComponent },
  { path: 'jobs', component: JobsListComponent },
  { path: 'races', component: RacesListComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
