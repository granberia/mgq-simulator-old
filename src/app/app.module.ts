import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActorsModule } from 'app/actors/actors.module';
import { CalculatorModule } from 'app/calculator/calculator.module';
import { JobsModule } from 'app/jobs/jobs.module';
import { RacesModule } from 'app/races/races.module';
import { DisqusModule } from 'app/shared/disqus/disqus.module';
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
    DisqusModule.forRoot('mgq-simulator-1'),
  ],
  providers: [CanDeactivateGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
