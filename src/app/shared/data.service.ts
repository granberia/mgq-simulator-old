import { ElementList } from './datatype/elements';
import { StatusList } from './datatype/status';
import { Injectable } from '@angular/core';
import { ACTOR_LIST } from './database/actorsDataBase';
import { Job } from './datatype/jobs';
import { JOB_LIST } from './database/jobsDataBase';
import { Race } from './datatype/races';
import { RACE_LIST } from './database/racesDataBase';

@Injectable()
export class DataService {

  constructor() { }

  getAllActors() {
    return ACTOR_LIST.map(job => this.setupDefaultActorValues(job));
  }

  getOneActor(id: string) {
    return this.setupDefaultActorValues(ACTOR_LIST.find(actor => actor.id === id));
  }

  getAllJobs() {
    return JOB_LIST.map(job => this.setupDefaultJobValues(job));
  }

  getOneJob(id: string) {
    return this.setupDefaultJobValues(JOB_LIST.find(job => job.id === id));
  }

  getAllRaces() {
    return RACE_LIST.map(race => this.setupDefaultJobValues(race));
  }

  getOneRace(id: string) {
    return this.setupDefaultJobValues(RACE_LIST.find(race => race.id === id));
  }

  setupDefaultActorValues(target: any) { // interface 를 정의할 때 기본값 설정이 불가능하자 사용한 수단
    target.baseRaces = target.baseRaces ? target.baseRaces : ['인간', '하위 천사'];
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
