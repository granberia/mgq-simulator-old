import { ElementList } from './datatype/elements';
import { StatusList } from './datatype/status';
import { Injectable } from '@angular/core';
import { ACTOR_LIST } from './database/actorsDataBase';
import { Job } from './datatype/jobs';
import { JOB_LIST } from './database/jobsDataBase';
import { Race, BaseRace, RaceType } from './datatype/races';
import { RACE_LIST } from './database/racesDataBase';

@Injectable()
export class DataService {
  total = {};

  constructor() { }

  getAllActors(filter?: {
    baseRace?: BaseRace[];
  }) {
    this.total = {};
    for (let key in RaceType) {
      this.total[RaceType[key]] = 0;
    }
    let result = ACTOR_LIST.map(actor => this.setupDefaultActorValues(actor));
    if (filter && filter.baseRace) {
      result = ACTOR_LIST.filter(actor => {
        let flag = false;
        filter.baseRace.forEach(race => {
          if (actor.baseRaces.includes(race)) {
            flag = true;
          }
        });
        return flag;
      });
    }
    return {
      total: this.total,
      actors: result,
    };
  }

  getOneActor(id: string) {
    return this.setupDefaultActorValues(ACTOR_LIST.find(actor => actor.id === id));
  }

  getAllJobs() {
    return {
      total: [],
      jobs: JOB_LIST.map(job => this.setupDefaultJobValues(job)),
    };
  }

  getOneJob(id: string) {
    return this.setupDefaultJobValues(JOB_LIST.find(job => job.id === id));
  }

  getAllRaces() {
    return {
      total: [],
      races: RACE_LIST.map(race => this.setupDefaultJobValues(race)),
    };
  }

  getOneRace(id: string) {
    return this.setupDefaultJobValues(RACE_LIST.find(race => race.id === id));
  }

  setupDefaultActorValues(target: any) { // interface 를 정의할 때 기본값 설정이 불가능하자 사용한 수단
    target.baseRaces = [];
    target.initRace.forEach(race => {
      let baseRace = '';
      if (Number(race.id) >= 151 && Number(race.id) < 158) {
        baseRace = '인간';
      }
      if (Number(race.id) >= 158 && Number(race.id) < 167) {
        baseRace = '요마';
      }
      if (Number(race.id) >= 167 && Number(race.id) < 175) {
        baseRace = '아인';
      }
      if (Number(race.id) >= 175 && Number(race.id) < 184) {
        baseRace = '음마';
      }
      if (Number(race.id) >= 184 && Number(race.id) < 194) {
        baseRace = '흡혈귀';
      }
      if (Number(race.id) >= 194 && Number(race.id) < 203) {
        baseRace = '인어';
      }
      if (Number(race.id) >= 203 && Number(race.id) < 214) {
        baseRace = '엘프';
      }
      if (Number(race.id) >= 214 && Number(race.id) < 223) {
        baseRace = '요정';
      }
      if (Number(race.id) >= 223 && Number(race.id) < 232) {
        baseRace = '슬라임';
      }
      if (Number(race.id) >= 232 && Number(race.id) < 245) {
        baseRace = '마수';
      }
      if (Number(race.id) >= 245 && Number(race.id) < 254) {
        baseRace = '요호';
      }
      if (Number(race.id) >= 254 && Number(race.id) < 265) {
        baseRace = '라미아';
      }
      if (Number(race.id) >= 265 && Number(race.id) < 274) {
        baseRace = '스큐라';
      }
      if (Number(race.id) >= 274 && Number(race.id) < 283) {
        baseRace = '하피';
      }
      if (Number(race.id) >= 283 && Number(race.id) < 293) {
        baseRace = '드래곤';
      }
      if (Number(race.id) >= 293 && Number(race.id) < 301) {
        baseRace = '육서종';
      }
      if (Number(race.id) >= 301 && Number(race.id) < 309) {
        baseRace = '해서종';
      }
      if (Number(race.id) >= 309 && Number(race.id) < 319) {
        baseRace = '벌레';
      }
      if (Number(race.id) >= 319 && Number(race.id) < 328) {
        baseRace = '식물';
      }
      if (Number(race.id) >= 328 && Number(race.id) < 336) {
        baseRace = '좀비';
      }
      if (Number(race.id) >= 336 && Number(race.id) < 344) {
        baseRace = '고스트';
      }
      if (Number(race.id) >= 344 && Number(race.id) < 354) {
        baseRace = '돌';
      }
      if (Number(race.id) >= 354 && Number(race.id) < 362) {
        baseRace = '키메라';
      }
      if (Number(race.id) >= 362) {
        baseRace = '천사';
      }
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
      this.total[item]++;
    });
    return target;
  }

  setupDefaultJobValues(target: any) { // interface 를 정의할 때 기본값 설정이 불가능하자 사용한 수단
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

}
