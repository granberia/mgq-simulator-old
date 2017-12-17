import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActorsModule } from 'app/actors/actors.module';
import { CalculatorModule } from 'app/calculator/calculator.module';
import { JobsModule } from './jobs/jobs.module';
import { RacesModule } from './races/races.module';
import { WeaponsModule } from './weapons/weapons.module';
import { LivereModule } from './shared/livere/livere.module';
import { ClarityModule } from 'clarity-angular';

import { AppComponent } from './app.component';
import { ROUTING } from './app.routing';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule,
    ROUTING,
    CoreModule,
    CalculatorModule,
    ActorsModule,
    JobsModule,
    RacesModule,
    WeaponsModule,
    LivereModule.forRoot('MTAyMC8zMjQxMy84OTc0'),
  ],
  providers: [CanDeactivateGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
