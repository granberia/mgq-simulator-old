import { Component, EventEmitter } from '@angular/core';
import { Filter, DatagridFilter, StringFilter } from "clarity-angular";
import { DataService } from './data.service';
import { Actor } from './datatype/actors';
import { Job } from './datatype/jobs';
import { Race } from './datatype/races';
import { Weapon } from './datatype/weapons';
import { WeaponType } from './../shared/datatype/weapons';
import { Armor } from './datatype/armors';
import { ArmorType } from './../shared/datatype/armors';
import { Accessory } from './datatype/accessories';
import { Skill, SkillType } from './datatype/skills';
import { Ability, AbilityType } from './datatype/abilities';


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

  changes: EventEmitter<any> = new EventEmitter<any>(false);

  accepts(actor: Actor) {
    if (actor.artist === 'しいずぴぃ') { // 몬무스 퀘스트 패러독스 제작진들 반성해라. 원본 게임에 오타를 넣다니
      return (this.dataService.artistFilter.includes('しぃずぴぃ'));
    }
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

export class WeaponNameFilter implements StringFilter<Weapon> {
  accepts(a: Weapon, search: string): boolean {
    return "" + a.name === search
      || a.name.toLowerCase().indexOf(search) >= 0;
  }
}

export class WeaponTypeFilter implements Filter<Weapon> {
  constructor(
    public dataService: DataService,
  ) { }

  changes: EventEmitter<any> = new EventEmitter<any>(false);

  accepts(weapon: Weapon) {
    return (this.dataService.weaponFilter.includes(WeaponType[weapon.type]));
  }

  isActive(): boolean {
    return this.dataService.weaponFilter.length !== 0;
  }

  setValue(value: boolean, weapon: string) {
    if (value === true && (!this.dataService.weaponFilter.includes(weapon))) {
      this.dataService.weaponFilter.push(weapon);
    } else if (value === false && this.dataService.weaponFilter.includes(weapon)) {
      this.dataService.weaponFilter.splice(this.dataService.weaponFilter.indexOf(weapon), 1);
    } 
    this.changes.emit(true);
  }
}

export class ArmorNameFilter implements StringFilter<Armor> {
  accepts(a: Armor, search: string): boolean {
    return "" + a.name === search
      || a.name.toLowerCase().indexOf(search) >= 0;
  }
}

export class ArmorTypeFilter implements Filter<Armor> {
  constructor(
    public dataService: DataService,
  ) { }

  changes: EventEmitter<any> = new EventEmitter<any>(false);

  accepts(armor: Armor) {
    return (this.dataService.armorFilter.includes(ArmorType[armor.type]));
  }

  isActive(): boolean {
    return this.dataService.armorFilter.length !== 0;
  }

  setValue(value: boolean, armor: string) {
    if (value === true && (!this.dataService.armorFilter.includes(armor))) {
      this.dataService.armorFilter.push(armor);
    } else if (value === false && this.dataService.armorFilter.includes(armor)) {
      this.dataService.armorFilter.splice(this.dataService.armorFilter.indexOf(armor), 1);
    } 
    this.changes.emit(true);
  }
}

export class AccessoryNameFilter implements StringFilter<Accessory> {
  accepts(a: Accessory, search: string): boolean {
    return "" + a.name === search
      || a.name.toLowerCase().indexOf(search) >= 0;
  }
}

export class SpecialStatFilter implements StringFilter<Weapon | Armor> {
  accepts(a: Weapon | Armor, search: string): boolean {
    return "" + a.displaySpecialStat === search
      || a.displaySpecialStat.toLowerCase().indexOf(search) >= 0;
  }
}

export class SkillNameFilter implements StringFilter<Skill> {
  accepts(a: Skill, search: string): boolean {
    return "" + a.name === search
      || a.name.toLowerCase().indexOf(search) >= 0;
  }
}

export class SkillTypeFilter implements Filter<Skill> {
  constructor(
    public dataService: DataService,
  ) { }

  changes: EventEmitter<any> = new EventEmitter<any>(false);

  accepts(skill: Skill) {
    return (this.dataService.skillFilter.includes(SkillType[skill.type]));
  }

  isActive(): boolean {
    return this.dataService.skillFilter.length !== 0;
  }

  setValue(value: boolean, skill: string) {
    if (value === true && (!this.dataService.skillFilter.includes(skill))) {
      this.dataService.skillFilter.push(skill);
    } else if (value === false && this.dataService.skillFilter.includes(skill)) {
      this.dataService.skillFilter.splice(this.dataService.skillFilter.indexOf(skill), 1);
    } 
    this.changes.emit(true);
  }
}

export class AbilityNameFilter implements StringFilter<Ability> {
  accepts(a: Ability, search: string): boolean {
    return "" + a.name === search
      || a.name.toLowerCase().indexOf(search) >= 0;
  }
}

export class AbilityTypeFilter implements Filter<Ability> {
  constructor(
    public dataService: DataService,
  ) { }

  changes: EventEmitter<any> = new EventEmitter<any>(false);

  accepts(ability: Ability) {
    return (this.dataService.abilityFilter.includes(AbilityType[ability.type]));
  }

  isActive(): boolean {
    return this.dataService.abilityFilter.length !== 0;
  }

  setValue(value: boolean, ability: string) {
    if (value === true && (!this.dataService.abilityFilter.includes(ability))) {
      this.dataService.abilityFilter.push(ability);
    } else if (value === false && this.dataService.abilityFilter.includes(ability)) {
      this.dataService.abilityFilter.splice(this.dataService.abilityFilter.indexOf(ability), 1);
    } 
    this.changes.emit(true);
  }
}