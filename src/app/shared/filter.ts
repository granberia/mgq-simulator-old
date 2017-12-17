import { Component, EventEmitter } from '@angular/core';
import { Filter, DatagridFilter, StringFilter } from "clarity-angular";
import { DataService } from './data.service';
import { Actor } from './datatype/actors';
import { Job } from './datatype/jobs';
import { Race } from './datatype/races';


export class JobNameFilter implements StringFilter<Job> {
  accepts(a: Job, search: string): boolean {
    return "" + a.name === search
      || a.name.toLowerCase().indexOf(search) >= 0;
  }
}

export class RaceNameFilter implements StringFilter<Race> {
  accepts(a: Race, search: string): boolean {
    return "" + a.name === search
      || a.name.toLowerCase().indexOf(search) >= 0;
  }
}

export class ActorNameFilter implements StringFilter<Actor> {
  accepts(a: Actor, search: string): boolean {
    return "" + a.name === search
      || a.name.toLowerCase().indexOf(search) >= 0;
  }
}

export class ActorSecondaryNameFilter implements StringFilter<Actor> {
  accepts(a: Actor, search: string): boolean {
    return "" + a.secondaryName === search
      || a.secondaryName.toLowerCase().indexOf(search) >= 0;
  }
}

export class ActorArtistFilter implements Filter<Actor> {
  constructor(
    public dataService: DataService,
  ) { }

  artist: string[] = [];
  changes: EventEmitter<any> = new EventEmitter<any>(false);

  accepts(actor: Actor) {
    return (this.dataService.artistFilter.includes(actor.artist));
  }

  isActive(): boolean {
    return this.dataService.artistFilter.length !== 0;
  }

  setValue(value: boolean, artist: string) {
    if (value === true && (!this.dataService.artistFilter.includes(artist))) {
      this.dataService.artistFilter.push(artist);
    } else if (value === false && this.dataService.artistFilter.includes(artist)) {
      this.dataService.artistFilter.splice(this.dataService.artistFilter.indexOf(artist), 1);
    } 
    this.changes.emit(true);
  }
}
