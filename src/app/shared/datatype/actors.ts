import { Common } from './common';
import { BaseRace } from './races';

export interface Actor extends Common {
  secondaryName?: string;
  baseRaces?: BaseRace[];
  defaultJob: string;
  defaultRace: string;
}
