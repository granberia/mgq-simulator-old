import { Injectable } from '@angular/core';
import { Actor } from './datatype/actors';
import { Job } from './datatype/jobs';
import { Race } from './datatype/races';


@Injectable()
export class CalculateService {

  constructor() { }

  calculateStat(name: string, target: {
    actor: Actor;
    job: Job;
    race: Race
  }) {
    let result = 100;
    result = target.actor ? result * target.actor[name] / 100 : result;
    result = target.job ? result * target.job[name] / 100 : result;
    result = target.race ? result * target.race[name] / 100 : result;
    return Math.floor(result);
  }

  calculateSpecialStat(name: string, target: { // 2.20에선 중첩시 점감 스탯이랑 점감 안되는 스탯으로 쪼개야 할 거다
    actor: Actor;
    job: Job;
    race: Race
  }) {
    let result = 0;
    switch (name) {
      case 'critical':
        result = 5;
        break;
      case 'evasion':
        result = 5;
        break;
      case 'spCharge':
        result = 100;
        break;
      case 'mpCost':
        result = 100;
        break;
      case 'spCost':
        result = 100;
        break;
      case 'healRate':
        result = 100;
        break;
      case 'itemUseRate':
        result = 100;
        break;
      case 'stealRate':
        result = 100;
        break;
      case 'expRate':
        result = 100;
        break;
      case 'jobExpRate':
        result = 100;
        break;
      case 'goldRate':
        result = 100;
        break;
      case 'itemGetRate':
        result = 100;
        break;
      default:
        result = 0;
    }
    if (target.actor && target.actor[name] && target.actor[name] > result) {
      result = target.actor[name];
    }
    if (target.job && target.job[name] && target.job[name] > result) {
      result = target.job[name];
    }
    if (target.race && target.race[name] && target.race[name] > result) {
      result = target.race[name];
    }
    return result;
  }



  calculateSpecialMinStat(name: string, target: { // 2.20에선 중첩시 점감 스탯이랑 점감 안되는 스탯으로 쪼개야 할 거다
    actor: Actor;
    job: Job;
    race: Race
  }) {
    let result = 0;
    switch (name) {
      case 'mpCost':
        result = 100;
        break;
      case 'spCost':
        result = 100;
        break;
      default:
        result = 100;
    }
    if (target.actor && target.actor[name] && target.actor[name] < result) {
      result = target.actor[name];
    }
    if (target.job && target.job[name] && target.job[name] < result) {
      result = target.job[name];
    }
    if (target.race && target.race[name] && target.race[name] < result) {
      result = target.race[name];
    }
    return result;
  }

  calculateElementResist(name: string, target: {
    actor: Actor;
    job: Job;
    race: Race
  }) {
    let result = 100;
    result = target.job ? result * (target.job.elementResist[name]) / 100 : result;
    result = target.race ? result * (target.race.elementResist[name]) / 100 : result;
    return Math.floor(result);
  }

  calculateStateResist(name: string, target: {
    actor: Actor;
    job: Job;
    race: Race
  }) {
    let result = 100;
    result = target.job ? result * (target.job.stateResist[name]) / 100 : result;
    result = target.race ? result * (target.race.stateResist[name]) / 100 : result;
    return Math.floor(result);
  }

  calculateStyle(icon: number) {
    return {
      'width': '24px',
      'height': '24px',
      'object-fit': 'none',
      'object-position': '-' + (icon % 16 * 24) + 'px -' + (Math.floor(icon / 16) * 24) + 'px',
    }
  }

}
