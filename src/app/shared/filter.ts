import { StringFilter } from 'clarity-angular';
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
