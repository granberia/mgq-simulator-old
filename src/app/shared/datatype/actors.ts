import { Common } from './common';
import { BaseRace } from './races';

export interface Actor extends Common {
  secondaryName?: string;
  defaultJob: string;
  defaultRace: string;
  initJob: {
    id: string,
    level: number,
  }[];
  initRace: {
    id: string,
    level: number,
  }[];
  baseRaces?: BaseRace[];
  artist: string;
}
