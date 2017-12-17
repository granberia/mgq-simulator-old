import { ElementList } from './datatype/elements';
import { StatusList } from './datatype/status';
import { Injectable } from '@angular/core';
import { ACTOR_LIST } from './database/actorsDataBase';
import { JOB_LIST } from './database/jobsDataBase';
import { BaseRace, RaceType } from './datatype/races';
import { RACE_LIST } from './database/racesDataBase';
import { WEAPON_LIST } from './database/weaponsDataBase';
import { WeaponType } from './datatype/weapons';


@Injectable()
export class DataService {
  actorRaceCount = {};
  actorRaceFilter: BaseRace[] = [];
  raceCount = {};
  raceFilter: BaseRace[] = [];
  artistFilter: string[] = [];
  weaponFilter: string[] = [];

  constructor() { }

  getAllActors() {
    this.actorRaceCount = {};
    for (let key in RaceType) {
      this.actorRaceCount[RaceType[key]] = 0;
    }
    let result = ACTOR_LIST.map(actor => this.setupDefaultActorValues(actor));
    if (this.actorRaceFilter.length != 0) {
      result = ACTOR_LIST.filter(actor => {
        let flag = false;
        this.actorRaceFilter.forEach(race => {
          if (actor.baseRaces.includes(race)) {
            flag = true;
          }
        });
        return flag;
      });
    }
    return {
      total: this.actorRaceCount,
      actors: result,
    };
  }

  getOneActor(id: string) {
    return this.setupDefaultActorValues(ACTOR_LIST.find(actor => actor.id === id));
  }

  getAllJobs() {
    return {
      total: [],
      jobs: JOB_LIST.map(job => this.setupDefaultValues(job)),
    };
  }

  getOneJob(id: string) {
    return this.setupDefaultValues(JOB_LIST.find(job => job.id === id));
  }

  getAllRaces() {
    this.raceCount = {};
    for (let key in RaceType) {
      this.raceCount[RaceType[key]] = 0;
    }
    let result = RACE_LIST.map(race => {
      this.raceCount[this.getRaceType(Number(race.id))]++;
      return this.setupDefaultValues(race);
    });
    if (this.raceFilter.length != 0) {
      result = RACE_LIST.filter(race => {
        let flag = false;
        this.raceFilter.forEach(filterRace => {
          if (this.getRaceType(Number(race.id)) === filterRace) {
            flag = true;
          }
        });
        return flag;
      });
    }
    return {
      total: this.raceCount,
      races: result,
    };
  }

  getOneRace(id: string) {
    return this.setupDefaultValues(RACE_LIST.find(race => race.id === id));
  }

  getAllWeapons() {
    let result = WEAPON_LIST.map(weapon => this.setupDefaultValues(weapon));
    if (this.weaponFilter.length != 0) {
      result = WEAPON_LIST.filter(weapon => {
        let flag = false;
        this.weaponFilter.forEach(type => {
          if (WeaponType[weapon.type] === type) {
            flag = true;
          }
        });
        return flag;
      });
    }
    return {
      total: [],
      weapons: result,
    };
  }

  getOneWeapon(id: string) {
    return this.setupDefaultValues(WEAPON_LIST.find(weapon => weapon.id === id));
  }

  setupDefaultActorValues(target: any) { // interface 를 정의할 때 기본값 설정이 불가능하자 사용한 수단
    target.baseRaces = [];
    target.initRace.forEach(race => {
      let baseRace = this.getRaceType(Number(race.id));
      target.baseRaces.push(baseRace);
    });
    let result = [];
    target.baseRaces = target.baseRaces.forEach(item => {
      if (result.indexOf(item) < 0) {
        result.push(item);
      }
    });
    target.baseRaces = result;
    result.forEach(item => {
      this.actorRaceCount[item]++;
    });
    return target;
  }

  setupDefaultValues(target: any) { // interface 를 정의할 때 기본값 설정이 불가능하자 사용한 수단
    const elementList = ElementList;
    target.elementResist = target.elementResist ? target.elementResist : {};
    elementList.forEach(element => {
      target.elementResist[element] = target.elementResist[element] ? target.elementResist[element] : 100;
    });
    const stateResist = StatusList;
    target.stateResist = target.stateResist ? target.stateResist : {};
    stateResist.forEach(status => {
      target.stateResist[status] = target.stateResist[status] ? target.stateResist[status] : 100;
    });
    return target;
  }

  getRaceType(index: number) {
    if (index >= 151 && index < 158) {
      return '인간';
    }
    if (index >= 158 && index < 167) {
      return '요마';
    }
    if (index >= 167 && index < 175) {
      return '아인';
    }
    if (index >= 175 && index < 184) {
      return '음마';
    }
    if (index >= 184 && index < 194) {
      return '흡혈귀';
    }
    if (index >= 194 && index < 203) {
      return '인어';
    }
    if (index >= 203 && index < 214) {
      return '엘프';
    }
    if (index >= 214 && index < 223) {
      return '요정';
    }
    if (index >= 223 && index < 232) {
      return '슬라임';
    }
    if (index >= 232 && index < 245) {
      return '마수';
    }
    if (index >= 245 && index < 254) {
      return '요호';
    }
    if (index >= 254 && index < 265) {
      return '라미아';
    }
    if (index >= 265 && index < 274) {
      return '스큐라';
    }
    if (index >= 274 && index < 283) {
      return '하피';
    }
    if (index >= 283 && index < 293) {
      return '드래곤';
    }
    if (index >= 293 && index < 301) {
      return '육서종';
    }
    if (index >= 301 && index < 309) {
      return '해서종';
    }
    if (index >= 309 && index < 319) {
      return '벌레';
    }
    if (index >= 319 && index < 328) {
      return '식물';
    }
    if (index >= 328 && index < 336) {
      return '좀비';
    }
    if (index >= 336 && index < 344) {
      return '고스트';
    }
    if (index >= 344 && index < 354) {
      return '돌';
    }
    if (index >= 354 && index < 362) {
      return '키메라';
    }
    if (index >= 362) {
      return '천사';
    }
    return '';
  }

}
