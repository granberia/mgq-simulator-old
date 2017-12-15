import { Common } from './common';

export type BaseRace = '인간' | '천사';

export interface Race extends Common {
  category?: BaseRace;
  require: string[];
}
